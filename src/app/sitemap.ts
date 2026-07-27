import { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wagertechnik.de';

const routes = [
  '',
  '/about',
  '/services',
  '/how-we-work',
  '/our-model',
  '/contact',
  '/impressum',
  '/privacy',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const entries: MetadataRoute.Sitemap = [];

  routes.forEach((route) => {
    // English path (default)
    const enUrl = `${baseUrl}${route}`;
    // German path
    const deUrl = `${baseUrl}/de${route}`;

    entries.push({
      url: enUrl,
      lastModified,
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1.0 : 0.8,
      alternates: {
        languages: {
          en: enUrl,
          de: deUrl,
          'x-default': enUrl,
        },
      },
    });

    entries.push({
      url: deUrl,
      lastModified,
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1.0 : 0.8,
      alternates: {
        languages: {
          en: enUrl,
          de: deUrl,
          'x-default': enUrl,
        },
      },
    });
  });

  return entries;
}
