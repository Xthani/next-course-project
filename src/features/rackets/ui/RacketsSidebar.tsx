import styles from "./RacketsSidebar.module.css";

const categories = [
  { label: "Все", value: "all" },
  { label: "Wilson", value: "Wilson" },
  { label: "Head", value: "Head" },
  { label: "Yonex", value: "Yonex" },
  { label: "Babolat", value: "Babolat" },
];

export const RacketsSidebar = () => {
  return (
    <>
      <h3 className={styles.sidebarTitle}>Категории</h3>
      <div className={styles.categoryList}>
        {categories.map(({ label, value }) => (
          <div key={value} className={styles.categoryItem}>
            {label}
          </div>
        ))}
      </div>
    </>
  );
};
