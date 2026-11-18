import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = 'CLARO logo on a black background';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const image = await readFile(join(process.cwd(), 'public/claro-social.png'));
  const imageSource = `data:image/png;base64,${image.toString('base64')}`;

  return new ImageResponse(
    <img src={imageSource} style={{ width: 1200, height: 630 }} alt={alt} />,
    size
  );
}
