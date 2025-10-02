import { Header, Footer } from "@/shared/ui";
import styles from "./layout.module.css";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tennis Store",
  description: "Магазин теннисных ракеток",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <NextTopLoader showSpinner={false} />
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
