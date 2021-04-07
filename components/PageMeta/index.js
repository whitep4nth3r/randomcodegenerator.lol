import Head from "next/head";

export default function PageMeta() {
  const siteTitle = "[object Object] | By whitep4nth3r";
  const description =
    "Need some code for your project? We've got you covered. Choose how much code. Choose your language. BÄM! You got code.";
  const url = "https://randomcodegenerator.lol";

  return (
    <Head>
      <title>{siteTitle}</title>

      <meta name="title" content={siteTitle} />
      <meta property="og:title" content={siteTitle} />
      <meta property="twitter:title" content={siteTitle} />

      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="twitter:description" content={description} />

      <meta property="og:url" content={url} />
      <meta property="twitter:url" content={url} />

      <meta property="og:image" content={`${url}/img/og.png`} />
      <meta property="twitter:image" content={`${url}/img/og.png`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@whitep4nth3r" />
      <meta name="twitter:creator" content="@whitep4nth3r" />

      <meta name="monetization" content="$ilp.uphold.com/J7y7wkRezRYL" />

      <link rel="icon" href="/favicon.ico" />

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0f111a" />
      <meta name="msapplication-TileColor" content="#b91d47" />
      <meta name="theme-color" content="#f11012" />
    </Head>
  );
}
