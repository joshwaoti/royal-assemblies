import { readFileSync } from "node:fs";
import { join } from "node:path";

describe("static UI source compliance", () => {
  it("keeps backend-shaped features frontend-only", () => {
    const givePage = readFileSync(join(process.cwd(), "app/give/page.tsx"), "utf8");
    const sermonsPage = readFileSync(join(process.cwd(), "app/sermons/page.tsx"), "utf8");

    expect(givePage).toContain("Awaiting Verified Paybill");
    expect(sermonsPage).toContain("Static UI Live Fallback");
    expect(sermonsPage).not.toContain("fetch(");
  });

  it("includes required home sections", () => {
    const home = readFileSync(join(process.cwd(), "app/page.tsx"), "utf8");

    [
      "Live Now / Next Service",
      "Featured Sermons",
      "Our Ministries",
      "Testimonies",
      "Socials",
      "BookCover",
      "Newsletter"
    ].forEach((text) => expect(home).toContain(text));
  });

  it("uses the provided Royal Assembly logo for identity and metadata", () => {
    const layout = readFileSync(join(process.cwd(), "app/layout.tsx"), "utf8");
    const nav = readFileSync(join(process.cwd(), "components/logo.tsx"), "utf8");

    expect(layout).toContain("/images/royal-logo.jpg");
    expect(nav).toContain("Royal Assembly Church logo");
  });
});
