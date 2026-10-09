import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Agentes do Valorant",
  description: "Checkpoint 5 - WebDevelopment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <Header titulo="Agentes do Valorant" />
      <body>{children}</body>
    </html>
  );
}
