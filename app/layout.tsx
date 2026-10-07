import type { Metadata } from "next";

import "./globals.css";
import Layout from "./components/Layout";

export const metadata: Metadata = {
  title: "flower store",
  description: "Buy flower for ur girlfriend",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body ><Layout>  {children}</Layout>
      
        </body>
    </html>
  );
}
