import "@/globals.css";
import type { Metadata } from "next";
import Layout from "@/components/Layout/Layout";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Metadata still works for SEO, but we’ll add the viewport manually too.
export const metadata: Metadata = {
  title: "E-Fashion",
  description: "A clean and modern fashion e-commerce site.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Layout>{children}</Layout>
        <SpeedInsights />
      </body>
    </html>
  );
}
