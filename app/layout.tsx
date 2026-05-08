import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Crimson_Pro } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cinzel"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant"
});

const crimson = Crimson_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-crimson"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://royal-assembiles.vercel.app"),
  title: "Royal Assembly Church | Building Lives by the Creative Word of God",
  description:
    "Royal Assembly Church / Christ Foundation Ministries International in Nairobi, Kenya.",
  icons: {
    icon: [
      { url: "/images/royal-logo.jpg", type: "image/jpeg" },
      { url: "/images/royal-logo.jpg", sizes: "32x32", type: "image/jpeg" }
    ],
    apple: [{ url: "/images/royal-logo.jpg", type: "image/jpeg" }],
    shortcut: ["/images/royal-logo.jpg"]
  },
  openGraph: {
    title: "Royal Assembly Church",
    description: "Building lives by the creative word of God.",
    images: [{ url: "/images/royal-logo.jpg", alt: "Royal Assembly Church logo" }]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cinzel.variable} ${cormorant.variable} ${crimson.variable}`}>
        <ThemeProvider>
          <div id="fb-root" />
          <Script
            async
            defer
            crossOrigin="anonymous"
            src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v20.0"
            strategy="afterInteractive"
          />
          <Script async src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
          <div className="royal-shell">
            <Navigation />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
