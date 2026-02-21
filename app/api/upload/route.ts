import { NextResponse } from 'next/server';
import { createRouteClient } from '@/lib/supabase-route';

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

  const uploadedUrls: string[] = [];

  for (const file of files) {
    if (!file.type.startsWith('image/')) {
      return NextResponse.json({ error: 'Only image files are allowed.' }, { status: 400 });
    }

    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: 'Each file must be 5MB or less.' }, { status: 400 });
    }

    const ext = file.name.split('.').pop() || 'jpg';
    const path = `${user.id}/${crypto.randomUUID()}.${ext}`;
    const bytes = await file.arrayBuffer();

    const { error } = await supabase.storage.from('coin-images').upload(path, bytes, {
      contentType: file.type,
      upsert: false
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    const {
      data: { publicUrl }
    } = supabase.storage.from('coin-images').getPublicUrl(path);

    uploadedUrls.push(publicUrl);
  }

  return NextResponse.json({ urls: uploadedUrls });
}
