import styles from "./Footer.module.css";

interface FooterProps {
  text?: string;
}

export const Footer = ({ text = "TENNIS STORE" }: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>{text}</div>
    </footer>
  );
};
