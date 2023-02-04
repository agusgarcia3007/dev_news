import Head from "next/head";

const DOMAIN = "https://dev-news-ten-sigma.vercel.app/";

export default function Meta({
  title = "Devie - News for developers",
  description = "Devie is a must-have news app for developers, keeping you up-to-date on the latest advancements in the tech world. With its easy-to-use interface, you can quickly and efficiently access the news that matters to you most. Whether you're a seasoned veteran or just starting out, Devie offers tailored content specifically for developers, covering everything from cutting-edge programming languages to the newest hardware. Stay informed and stay ahead with Devie.",
  image = `${DOMAIN}/api/og`,
}: {
  title?: string;
  description?: string;
  image?: string;
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/news.png" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta itemProp="image" content={image} />
      <meta property="og:logo" content={`${DOMAIN}/news.png`}></meta>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
