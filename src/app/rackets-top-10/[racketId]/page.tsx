import { RacketDetailPage } from "@/shared/ui";

interface Props {
  params: Promise<{ racketId: string }>;
}

const Page = async ({ params }: Props) => {
  const { racketId } = await params;

  return <RacketDetailPage racketId={racketId} backHref="/rackets-top-10" backText="Вернуться к топ 10" />;
};

export default Page;
