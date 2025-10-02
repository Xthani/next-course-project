import Image from "next/image";
import { Badge } from "@/shared/ui";
import styles from "./ProductDetail.module.css";
import { getRacketById } from "@/features/rackets/api/racketsApi";

interface ProductDetailProps {
  racketId: string;
}

export const ProductDetail = async ({ racketId }: ProductDetailProps) => {
  const { isError, data: racket } = await getRacketById({ id: racketId });

  if (isError || !racket) {
    return (
      <div className={styles.productContainer}>
        <div>Товар не найден</div>
      </div>
    );
  }

  return (
    <div className={styles.productContainer}>
      <div className={styles.imageContainer}>
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
        <h1 className={styles.productName}>{racket.name}</h1>
        <div className={styles.productPrice}>${racket.price}</div>
        <p className={styles.productDescription}>{racket.description}</p>

        <div className={styles.productDetails}>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Модель:</span>
            <span className={styles.detailValue}>{racket.model}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Год выпуска:</span>
            <span className={styles.detailValue}>{racket.year}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Тип:</span>
            <span className={styles.detailValue}>{racket.type}</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Бренд:</span>
            <span className={styles.detailValue}>{racket.brand.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
