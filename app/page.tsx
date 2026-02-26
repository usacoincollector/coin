import { BuilderPage } from '@/components/builder-page';
import HomePageStatic from '@/components/home-page-static';
import { getBuilderPageContent } from '@/lib/builder-content';

export const revalidate = 60;

export default async function HomePage() {
  const content = await getBuilderPageContent('/');

  if (!content) {
    console.log('[Builder Debug] Rendering static homepage fallback for /');
    return <HomePageStatic />;
  }

  console.log('[Builder Debug] Rendering Builder homepage content for /', {
    contentId: content?.id ?? null
  });
  return <BuilderPage content={content} model="page" />;
}
