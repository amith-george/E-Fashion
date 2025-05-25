import "@/globals.css";
import type { Metadata } from "next";
import Layout from "@/components/Layout/Layout";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "E-Fashion",
  description: "A clean and modern fashion e-commerce site.",
  viewport: "width=device-width, initial-scale=1", // ✅ this fixes mobile
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
        <SpeedInsights />
      </body>
    </html>
  );
}
