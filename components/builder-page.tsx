'use client';

import { BuilderComponent, builder } from '@builder.io/react';

type BuilderPageProps = {
  content: any;
  model: string;
};

const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY;

if (apiKey) {
  builder.init(apiKey);
}

export function BuilderPage({ content, model }: BuilderPageProps) {
  if (!content) return null;

  return <BuilderComponent content={content} model={model} />;
}
