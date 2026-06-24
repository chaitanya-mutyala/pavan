import { Geist } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://pavankunapareddy.qd.je"),
  title: "Pavan Kunapareddy — Digital Marketing Consultant & Regional Influencer",
  description:
    "Helping businesses turn attention into customers through content, SEO, paid advertising, influencer marketing, and social media strategy. Founder of Konaseema Digital Marketing.",
  keywords: [
    "digital marketing consultant",
    "social media marketing",
    "SEO expert",
    "Google Ads",
    "Meta Ads",
    "influencer marketing",
    "content creator",
    "Konaseema",
    "Pavan Kunapareddy",
    "brand growth",
    "regional influencer",
  ],
  authors: [{ name: "Pavan Kunapareddy" }],
  creator: "Pavan Kunapareddy",
  openGraph: {
    title: "Pavan Kunapareddy — Digital Marketing Consultant & Regional Influencer",
    description:
      "Helping businesses turn attention into customers. SEO, Ads, Content, and Influencer Marketing.",
    url: "https://pavankunapareddy.qd.je",
    siteName: "Pavan Kunapareddy",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Pavan Kunapareddy — Digital Marketing Consultant",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pavan Kunapareddy — Digital Marketing Consultant",
    description:
      "Helping businesses turn attention into customers through digital marketing.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
