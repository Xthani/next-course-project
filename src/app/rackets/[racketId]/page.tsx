import { RacketDetailPage } from "@/shared/ui";
import { Metadata } from "next";
import { getMetadataRacketById } from "@/features/rackets/api/racketsApi";

interface Props {
  params: Promise<{ racketId: string }>;
  searchParams: Promise<{ from?: string }>;
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { racketId } = await params;

  const { data } = await getMetadataRacketById({ id: racketId });

  if (!data) {
    return { title: "Racket page" };
  }

  return {
    title: data.name,
    description: data.description,
  };
};

const Page = async ({ params, searchParams }: Props) => {
  const { racketId } = await params;
  const { from } = await searchParams;

  // Определяем, откуда пришел пользователь
  const backHref = from === "top10" ? "/rackets/top-10" : "/rackets";
  const backText =
    from === "top10" ? "Вернуться к топ 10" : "Вернуться к каталогу";

  return (
    <RacketDetailPage
      racketId={racketId}
      backHref={backHref}
      backText={backText}
    />
  );
};

export default Page;
