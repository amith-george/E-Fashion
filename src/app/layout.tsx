import "@/globals.css";
import type { Metadata } from "next";
import Layout from "@/components/Layout/Layout";

export const metadata: Metadata = {
  title: "E-Fashion",
  description: "A clean and modern fashion e-commerce site.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
