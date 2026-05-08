import { books, imageAssignments, routes, sermons, socials } from "@/lib/data";

describe("PRD static data compliance", () => {
  it("includes every required route", () => {
    expect(routes.map((route) => route.href)).toEqual([
      "/",
      "/about",
      "/sermons",
      "/ministries",
      "/events",
      "/give",
      "/connect",
      "/store",
      "/bible-institute"
    ]);
  });

  it("uses only verified sermon video IDs from the PRD", () => {
    const verified = new Set([
      "p4Zib6fFWps",
      "dKpZBFNz0VU",
      "U1Apy1qp-x8",
      "1Q931ytlJZ4",
      "BinZ0mj-smU",
      "LkH1k0tAyOs",
      "nGkatUY4YTg",
      "GXBxjvtVpl4",
      "R4B1xGHHCWE",
      "b2UpBF3ua3k",
      "gqB2xZ_NkEE",
      "U9f_xuhov80",
      "6v6Mw5eacLs"
    ]);
    expect(sermons.every((sermon) => verified.has(sermon.videoId))).toBe(true);
  });

  it("does not repeat Unsplash image IDs", () => {
    const ids = Object.values(imageAssignments);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("keeps verified book shop links", () => {
    expect(books).toHaveLength(6);
    expect(books.every((book) => book.url.startsWith("https://shop.royalassembly.church/product/"))).toBe(true);
    expect(books.every((book) => book.cover.includes("pastorfavouradeola.com/wp-content/uploads/2024/04/"))).toBe(true);
  });

  it("includes required social sources", () => {
    const urls = socials.map((social) => social.url);
    expect(urls).toContain("https://www.facebook.com/royalassemblycfmi/");
    expect(urls).toContain("https://www.instagram.com/royal_assembly_church/");
    expect(urls).toContain("https://www.youtube.com/@RoyalAssemblyChurch");
  });
});
