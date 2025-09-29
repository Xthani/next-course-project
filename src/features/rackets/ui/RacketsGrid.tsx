import { RacketCard } from "./RacketCard";
import styles from "./RacketsGrid.module.css";
import { getRackets, getTop10Rackets } from "@/features/rackets/api/racketsApi";

interface RacketsGridProps {
  isTop10?: boolean;
  className?: string;
}

export const RacketsGrid = async ({ isTop10 = false, className }: RacketsGridProps) => {
  const { isError, data: rackets } = isTop10 
    ? await getTop10Rackets()
    : await getRackets({ page: 1, limit: 10 });

  const customClasses =
    className
      ?.split(" ")
      .map((cls) => styles[cls] || cls)
      .join(" ") || "";

  if (isError || !rackets) {
    return (
      <div className={`${styles.productsGrid} ${customClasses}`}>
        <div>Ошибка загрузки данных</div>
      </div>
    );
  }

  return (
    <div className={`${styles.productsGrid} ${customClasses}`}>
      {rackets.map((racket) => (
        <RacketCard key={racket.id} racket={racket} />
      ))}
    </div>
  );
};
