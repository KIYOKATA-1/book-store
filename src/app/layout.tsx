import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Book Store",
  description: "Book Store — книжный магазин.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
