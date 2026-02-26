import { NextResponse } from 'next/server';
import { COIN_IMAGE_BUCKET } from '@/lib/coin-images';
import { createRouteClient } from '@/lib/supabase-route';

const MIME_EXTENSION_MAP: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/gif': 'gif',
  'image/avif': 'avif'
};

export async function POST(request: Request) {
  const supabase = createRouteClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const formData = await request.formData();
  const files = formData.getAll('files') as File[];

  if (files.length < 1 || files.length > 3) {
    return NextResponse.json({ error: 'Upload 1-3 images.' }, { status: 400 });
  }

  const validatedFiles = files.map((file) => {
    const ext = MIME_EXTENSION_MAP[file.type];
    return { file, ext };
  });

  for (const { file, ext } of validatedFiles) {
    if (!ext) {
      return NextResponse.json({ error: 'Only JPG, PNG, WEBP, GIF, or AVIF images are allowed.' }, { status: 400 });
    }

    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: 'Each file must be 5MB or less.' }, { status: 400 });
    }
  }

  const uploadedPaths: string[] = [];

  for (const { file, ext } of validatedFiles) {
    const path = `${user.id}/${crypto.randomUUID()}.${ext}`;
    const bytes = await file.arrayBuffer();

    const { error } = await supabase.storage.from(COIN_IMAGE_BUCKET).upload(path, bytes, {
      contentType: file.type,
      upsert: false
    });

    if (error) {
      if (uploadedPaths.length > 0) {
        await supabase.storage.from(COIN_IMAGE_BUCKET).remove(uploadedPaths);
      }
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    uploadedPaths.push(path);
  }

  return NextResponse.json({ paths: uploadedPaths });
}
