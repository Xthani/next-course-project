import Link from "next/link";
import styles from "./BackButton.module.css";

interface BackButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const BackButton = ({
  href,
  children,
  className = "",
}: BackButtonProps) => {
  const buttonClasses = [styles.backButton, className]
    .filter(Boolean)
    .join(" ");

  return (
    <Link href={href} className={buttonClasses}>
      {children}
    </Link>
  );
};
