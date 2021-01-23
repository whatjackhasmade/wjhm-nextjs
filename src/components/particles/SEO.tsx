/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';

import { htmlDecode } from 'wjhm';

const domain = process.env.NEXT_PUBLIC_DOMAIN;
const fallback = `${domain}/public/images/fallback.jpg`;

declare type SEOProps = {
  isBlog?: Boolean;
  metaDesc?: any;
  featuredImage?: any;
  slug?: string;
  title?: string;
  opengraphImage?: any;
  ogImage?: any;
  opengraphTitle?: string;
  twitterDescription?: string;
  twitterImage?: any;
  twitterTitle?: string;
};

const SEO = (props: SEOProps) => {
  const { isBlog = false, metaDesc } = props;
  const { featuredImage, slug, title = `` } = props;
  const { opengraphImage: ogImage, opengraphTitle: ogTitle = `` } = props;
  const { twitterDescription, twitterImage, twitterTitle } = props;

  const hasFeatured = featuredImage && featuredImage.xl;
  const featuredURL = hasFeatured ? featuredImage.xl : fallback;

  const postURL = `/`;
  const url = `${domain}/${slug}`;

  const decodedOGTitle = htmlDecode(ogTitle);
  const decodedTitle = htmlDecode(title);

  const description = metaDesc ? metaDesc : ``;
  const name = ogTitle ? decodedOGTitle : decodedTitle;
  const image = ogImage?.mediaItemUrl ? ogImage.mediaItemUrl : featuredURL;

  const safeTwitterDesc = twitterDescription ? twitterDescription : description;
  const safeTwitterImage = twitterImage ? twitterImage.mediaItemUrl : image;
  const safeTwitterTitle = twitterTitle ? twitterTitle : name;

  const schemaOrgJSONLD = [
    {
      '@context': `http://schema.org`,
      '@type': `WebSite`,
      url: domain,
      name,
      alternateName: `WhatJackHasMade`,
    },
    {
      '@context': `http://schema.org`,
      '@type': `BreadcrumbList`,
      itemListElement: [
        {
          '@type': `ListItem`,
          position: 1,
          item: {
            '@id': postURL,
            name,
            image,
          },
        },
      ],
    },
    {
      '@context': `http://schema.org`,
      '@type': `BlogPosting`,
      url: domain,
      name,
      alternateName: `WhatJackHasMade`,
      headline: name,
      image: {
        '@type': `ImageObject`,
        url: image,
      },
      description: metaDesc,
    },
  ];

  return (
    <Head>
      {/* General tags */}
      <title>{name}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta name="application-name" content="WhatJackHasMade" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="WhatJackHasMade" />
      <meta name="format-detection" content="telephone=no" />

      <link rel="icon" href="/images/favicon/favicon.ico" />
      <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/images/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/images/favicon/safari-pinned-tab.svg" color="#5bbad5" />

      <meta name="msapplication-TileColor" content="#0652DD" />
      <meta name="theme-color" content="#0652DD" />
      <meta name="msapplication-config" content="/images/icons/browserconfig.xml" />
      <meta name="msapplication-tap-highlight" content="no" />

      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />

      {/* Schema.org tags */}
      <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>

      {/* OpenGraph tags */}
      {isBlog && <meta property="og:type" content="article" />}
      <meta property="og:url" content={url} />
      <meta property="og:title" content={name} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:creator" content="@whatjackhasmade" />
      <meta name="twitter:title" content={safeTwitterTitle} />
      <meta name="twitter:description" content={safeTwitterDesc} />
      <meta name="twitter:image" content={safeTwitterImage} />
    </Head>
  );
};

export default SEO;
