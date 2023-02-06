import Card from "@/components/home/card";
import Layout from "@/components/layout";
import { New } from "@/lib/types/New";

export default function Home({ news }: { news: New[] }) {
  return (
    <Layout>
      <div className="my-10 grid w-full max-w-screen-xl animate-[slide-down-fade_0.5s_ease-in-out] grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {news?.map(
          (
            {
              title,
              description,
              image,
              url,
              cover_image,
              user,
              published_at,
              type_of,
            },
            index
          ) => (
            <Card
              key={published_at}
              large={index === 0}
              user={user}
              title={title}
              description={description}
              image={image}
              url={url}
              cover_image={cover_image}
              published_at={published_at}
              type_of={type_of}
            />
          )
        )}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://dev.to/api/articles");
  const news: New[] = await res.json();

  const banner: New = {
    title: "Welcome to Devie",
    description: "Stay tuned to dev.to articles",
    type_of: "Welcome",
    published_at: new Date().toISOString(),
    user: {
      username: "@agusgarcia3007",
      profile_image: "https://avatars.githubusercontent.com/u/81272885?v=4",
    },
    large: true,
    url: "https://github.com/agusgarcia3007",
  };

  news.unshift(banner);

  // sort news by date
  news.sort((a, b) => {
    const dateA = new Date(a.published_at);
    const dateB = new Date(b.published_at);
    return dateB.getTime() - dateA.getTime();
  });

  return {
    props: { news },
    revalidate: 3600,
  };
}
