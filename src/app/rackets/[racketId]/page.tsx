import { BackButton } from "@/shared/ui";
import { ProductDetail } from "@/features/rackets/ui";

export async function generateStaticParams() {
  return [{ racketId: "1" }, { racketId: "2" }, { racketId: "3" }];
}

interface Props {
  params: Promise<{ racketId: string }>;
}

const Page = async ({ params }: Props) => {
  const { racketId } = await params;

  return (
    <div className="container">
      <BackButton href="/rackets">Вернуться к каталогу</BackButton>
      <ProductDetail racketId={racketId} />
    </div>
  );
};

export default Page;
