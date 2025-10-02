import { RacketsGrid } from "@/features/rackets/ui";
import styles from "./page.module.css";

const Page = () => {
  return (
    <>
      <h1 className={styles.pageTitle}>Все ракетки</h1>
      <RacketsGrid />
    </>
  );
};

export default Page;
