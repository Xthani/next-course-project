import { RacketsGrid } from "@/features/rackets/ui";
import styles from "./page.module.css";

const Page = () => {
  return (
    <>
      <h1 className={styles.pageTitle}>Топ 10 ракеток</h1>
      <RacketsGrid isTop10 />
    </>
  );
};

export default Page;
