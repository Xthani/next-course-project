"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

interface HeaderProps {
  links?: Array<{ label: string; href: string }>;
}

const defaultLinks = [
  { label: "Главная", href: "/" },
  { label: "Ракетки", href: "/rackets" },
  { label: "Топ 10", href: "/rackets-top-10" },
];

export const Header = ({ links = defaultLinks }: HeaderProps) => {
  const pathname = usePathname();

  return (
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
  );
};
