import { RacketsSidebar } from "@/features/rackets/ui";
import styles from "./layout.module.css";

export default function RacketsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container">
      <div className={styles.content}>
        <aside className={styles.sidebar}>
          <RacketsSidebar />
        </aside>
        <div className={styles.mainContent}>
          {children}
        </div>
      </div>
    </div>
  );
}
