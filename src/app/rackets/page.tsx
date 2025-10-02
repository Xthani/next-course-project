import { RacketsGrid } from "@/features/rackets/ui";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Все ракетки",
  description: "Каталог всех ракеток",
};

const Page = () => {
  return (
    <>
      <h1 className={styles.pageTitle}>Все ракетки</h1>
      <RacketsGrid />
    </>
  );
};

export default Page;
