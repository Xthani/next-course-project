import { ReactNode } from "react";
import styles from "./Badge.module.css";

interface BadgeProps {
  children: ReactNode;
  variant?: "accent" | "success" | "warning" | "error";
  size?: "sm" | "md";
  className?: string;
}

export const Badge = ({
  children,
  variant = "accent",
  size = "sm",
  className = "",
}: BadgeProps) => {
  const badgeClasses = [styles.badge, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(" ");

  return <span className={badgeClasses}>{children}</span>;
};
