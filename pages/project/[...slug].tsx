import type { GetStaticProps, InferGetStaticPropsType } from "next";
import type { Project } from "contentlayer/generated";
import { allProjectArticles as articles } from "lib/contentlayer";

const prefix = `project`;

export const getStaticPaths = () => {
  const paths = articles.map((p) => ({
    params: { slug: p.slug!.split(`/`).slice(1) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  article: Project;
}> = async ({ params }) => {
  // unknown case
  if (!params?.slug) {
    return {
      notFound: true,
    };
  }

  // wonder if string should be an unknown case as well
  let slug = !Array.isArray(params.slug) ? params.slug : params.slug.join(`/`);
  slug = `${prefix}/${slug}`;
  const article = articles.find((doc) => doc!.slug === slug);

  if (!article) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      article,
    },
  };
};

export default function ArticlePage({ article }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <h1>Project Article: {article.title}</h1>;
}
