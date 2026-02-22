import { BuilderPage } from '@/components/builder-page';
import HomePageStatic from '@/components/home-page-static';
import { getBuilderPageContent } from '@/lib/builder-content';

export const revalidate = 60;

export default async function HomePage() {
  const content = await getBuilderPageContent('/');

  if (!content) {
    return <HomePageStatic />;
  }

  return <BuilderPage content={content} model="page" />;
}
