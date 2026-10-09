import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Checkpoint - 5 WebDev",
  description: "Checkpoint 5 - WebDevelopment",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
