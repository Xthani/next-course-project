import { RacketsGrid } from "@/features/rackets/ui";
import styles from "./RacketsPageLayout.module.css";

interface RacketsPageLayoutProps {
  title?: string;
  isTop10?: boolean;
}

const categories = [
  { label: "Все", value: "all" },
  { label: "Wilson", value: "Wilson" },
  { label: "Head", value: "Head" },
  { label: "Yonex", value: "Yonex" },
  { label: "Babolat", value: "Babolat" },
];

export const RacketsPageLayout = ({ 
  title = "Теннисные ракетки", 
  isTop10 = false 
}: RacketsPageLayoutProps) => {
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
          <h1 className={styles.pageTitle}>{title}</h1>
          <RacketsGrid isTop10={isTop10} />
        </div>
      </div>
    </div>
  );
};
