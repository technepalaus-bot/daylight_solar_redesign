import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Daylight Solar',
    short_name: 'Daylight Solar',
    description: 'Premium solar panel installation services in Australia. Get free solar assessment and check your eligibility for government solar subsidies.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#006D5B',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/img/logo_color.webp',
        sizes: '192x192',
        type: 'image/webp',
        purpose: 'maskable',
      },
      {
        src: '/img/logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    categories: ['business', 'energy', 'utilities'],
    lang: 'en-AU',
    dir: 'ltr',
  };
}
