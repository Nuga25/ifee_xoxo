import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";

const firaCode = Fira_Code({ subsets: ["latin"], weight: ["300", "700"] });

export const metadata: Metadata = {
  title: "ifee_xoxo",
  description: "Showcasing my work",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={firaCode.className}>
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
