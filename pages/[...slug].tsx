import type { GetStaticProps, InferGetStaticPropsType } from "next";
import type { Page } from "contentlayer/generated";
import { allPages } from "contentlayer/generated";
import { useLiveReload, useMDXComponent } from "next-contentlayer/hooks";
import { MdxComponents } from "components/mdx";
import { default as Layout } from "templates/Article";
import type {HeadingInfo} from "components/sidebars"
import {Toc} from "components/sidebars"

export const getStaticPaths = () => {
  const paths = allPages.map((p) => ({
    params: { slug: p.slug!.split(`/`) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  page: Page;
}> = async ({ params }) => {
  // unknown case
  if (!params?.slug) {
    return {
      notFound: true,
    };
  }

  const slug = !Array.isArray(params.slug) ? params.slug : params.slug.join(`/`);
  const page = allPages.find((doc) => doc!.slug === slug);

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page,
    },
  };
};

export default function PageView({ page }: InferGetStaticPropsType<typeof getStaticProps>) {
  useLiveReload();
  const MDXContent = useMDXComponent(page?.body?.code || "");
  return (
    <Layout title={page.title} subtitle={page.subtitle} sidebar={<Toc headings={page.headings as HeadingInfo[]} />}>
      {MDXContent && <MDXContent components={MdxComponents} />}
    </Layout>
  );
}
