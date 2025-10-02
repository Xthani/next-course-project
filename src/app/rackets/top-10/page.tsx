import { RacketsGrid } from "@/features/rackets/ui";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Топ 10 ракеток",
  description: "Лучшие ракетки",
};

const Page = () => {
  return (
    <>
      <h1 className={styles.pageTitle}>Топ 10 ракеток</h1>
      <RacketsGrid isTop10 />
    </>
  );
};

export default Page;
