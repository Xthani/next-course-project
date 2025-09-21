"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./layout.module.css";
import "./globals.css";

const links = [
  { label: "Главная", href: "/" },
  { label: "Ракетки", href: "/rackets" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="ru">
      <body>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <Link href="/" className={styles.logo}>
              TENNIS STORE
            </Link>
            <nav className={styles.nav}>
              {links.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={`${styles.navLink} ${pathname === href ? styles.active : ""}`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          <div className={styles.footerContent}>TENNIS STORE</div>
        </footer>
      </body>
    </html>
  );
}
