import { RacketCard } from "./RacketCard";
import { useRackets } from "../model/useRackets";
import styles from "./RacketsGrid.module.css";

interface RacketsGridProps {
  limit?: number;
  className?: string;
}

export const RacketsGrid = ({ limit, className }: RacketsGridProps) => {
  const { rackets, isLoading, error } = useRackets();

  const customClasses =
    className
      ?.split(" ")
      .map((cls) => styles[cls] || cls)
      .join(" ") || "";

  if (isLoading) {
    return (
      <div className={`${styles.productsGrid} ${customClasses}`}>
        <div>Загрузка...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`${styles.productsGrid} ${customClasses}`}>
        <div>Ошибка загрузки данных: {error}</div>
      </div>
    );
  }

  const displayRackets = limit ? rackets.slice(0, limit) : rackets;

  return (
    <div className={`${styles.productsGrid} ${customClasses}`}>
      {displayRackets.map((racket) => (
        <RacketCard key={racket.id} racket={racket} />
      ))}
    </div>
  );
};
