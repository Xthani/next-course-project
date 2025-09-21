import { RacketsGrid } from "@/features/rackets/ui";
import styles from "./rackets.module.css";

const categories = [
  { label: "Все", value: "all" },
  { label: "Wilson", value: "Wilson" },
  { label: "Head", value: "Head" },
  { label: "Yonex", value: "Yonex" },
  { label: "Babolat", value: "Babolat" },
];

const Page = () => {
  return (
    <div className="container">
      <div className={styles.content}>
        <aside className={styles.sidebar}>
          <h3 className={styles.sidebarTitle}>Категории</h3>
          <div className={styles.categoryList}>
            {categories.map(({ label, value }) => (
              <div key={value} className={styles.categoryItem}>
                {label}
              </div>
            ))}
          </div>
        </aside>

        <div className={styles.mainContent}>
          <h1 className={styles.pageTitle}>Теннисные ракетки</h1>
          <RacketsGrid />
        </div>
      </div>
    </div>
  );
};

export default Page;
