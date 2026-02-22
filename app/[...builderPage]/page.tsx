import { notFound } from 'next/navigation';
import { BuilderPage } from '@/components/builder-page';
import { getBuilderPageContent } from '@/lib/builder-content';

export const revalidate = 60;

type CatchAllPageProps = {
  params: {
    builderPage: string[];
  };
};

export default async function CatchAllPage({ params }: CatchAllPageProps) {
  const path = `/${params.builderPage.join('/')}`;
  const content = await getBuilderPageContent(path);

  if (!content) {
    notFound();
  }

  return <BuilderPage content={content} model="page" />;
}
