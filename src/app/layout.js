import "./globals.css";

export const metadata = {
  title: "Receitas",
  description: "Receitas utilizando DummyJSON",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}