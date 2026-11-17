import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const size = { width: 512, height: 512 };
export const contentType = 'image/png';

export default async function Icon() {
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
            <img src={logoSource} width="460" height="189" alt="CLARO" />
        </div>,
        size
    );
}
