import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/shared/ui";
import { Racket } from "@/shared/types";
import styles from "./RacketCard.module.css";

interface RacketCardProps {
  racket: Racket;
  from?: string;
}

export const RacketCard = ({ racket, from }: RacketCardProps) => {
  const href = from ? `/rackets/${racket.id}?from=${from}` : `/rackets/${racket.id}`;
  
  return (
    <Link
      key={racket.id}
      href={href}
      className={styles.productCard}
    >
      <div className={styles.productImageContainer}>
        <Image
          src={racket.imageUrl}
          alt={racket.name}
          fill
          className={styles.productImage}
        />
        {racket.top10 && <Badge className={styles.topBadge}>Топ 10</Badge>}
      </div>
      <div className={styles.productInfo}>
        <div className={styles.productBrand}>{racket.brand.name}</div>
        <h3 className={styles.productName}>{racket.name}</h3>
        <div className={styles.productPrice}>${racket.price}</div>
      </div>
    </Link>
  );
};
