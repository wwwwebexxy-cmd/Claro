import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = 'CLARO logo on a black background';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
    const logo = await readFile(join(process.cwd(), 'public/assets/claro-logo.webp'));
    const logoSource = `data:image/webp;base64,${logo.toString('base64')}`;

    return new ImageResponse(
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#000000',
            }}
        >
            <img src={logoSource} width="900" height="370" alt="CLARO logo" />
        </div>,
        size
    );
}
