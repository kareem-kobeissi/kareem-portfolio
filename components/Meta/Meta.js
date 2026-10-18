import Head from "next/head";
import { METADATA } from "../../constants";

const Meta = () => (
  <Head>
    <title>{METADATA.title}</title>
    <meta name="description" content={METADATA.description} />
    <meta name="keywords" content={METADATA.keywords} />
    <meta name="robots" content="index,follow" />
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="language" content={METADATA.language} />
    <meta name="author" content={METADATA.author} />
    <meta name="theme-color" content={METADATA.themeColor} />
    <meta httpEquiv="content-language" content="en" />
    <link rel="canonical" href={METADATA.siteUrl} />

    {/* Open Graph / Facebook */}
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={METADATA.title} />
    <meta property="og:description" content={METADATA.description} />
    <meta property="og:image" content={METADATA.image} />
    <meta property="og:url" content={METADATA.siteUrl} />
    <meta property="og:site_name" content={METADATA.title} />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={METADATA.title} />
    <meta name="twitter:description" content={METADATA.description} />
    <meta name="twitter:url" content={METADATA.siteUrl} />
    <meta name="twitter:image" content={METADATA.image} />

    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="shortcut icon" href="/favicon.svg" />
    <meta name="msapplication-TileColor" content="#7000FF" />
    <link rel="manifest" href="/manifest.json" />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: METADATA.author,
          url: METADATA.siteUrl,
          jobTitle: "Full-Stack Developer",
          email: "mailto:kbkareem31@gmail.com",
          telephone: "+96170831913",
          address: {
            "@type": "PostalAddress",
            addressCountry: "LB",
          },
          sameAs: [
            "https://github.com/kareem-kobeissi",
            "https://www.linkedin.com/in/kareem-kobeissi-658488289",
          ],
        }),
      }}
    />
  </Head>
);

export default Meta;
