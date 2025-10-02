import { BackButton } from "@/shared/ui";
import { ProductDetail } from "@/features/rackets/ui";

interface RacketDetailPageProps {
  racketId: string;
  backHref?: string;
  backText?: string;
}

export const RacketDetailPage = ({ 
  racketId, 
  backHref = "/rackets", 
  backText = "Вернуться к каталогу" 
}: RacketDetailPageProps) => {
  return (
    <div className="container">
      <BackButton href={backHref}>{backText}</BackButton>
      <ProductDetail racketId={racketId} />
    </div>
  );
};
