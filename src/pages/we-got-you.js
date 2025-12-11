import React from "react";
import { Helmet } from "react-helmet";
import { createClient } from "prismicio";
import Hero from "components/we-got-you/Hero";

const WeGotYou = ({ page }) => {
  if (!page) return null;

  const { data } = page;

  return (
    <>
      <Helmet
        title={data?.page_title}
        meta={[
          { name: "description", content: data?.page_description },
          { property: "og:title", content: data?.page_title },
          { property: "og:description", content: data?.page_description },
          {
            property: "og:image",
            content: `${data?.page_social_image?.url}&w=1200&h=630&fit=crop&q=85&f=center`,
          },
          {
            name: "twitter:image",
            content: `${data?.page_social_image?.url}&w=1200&h=630&fit=crop&q=85&f=center`,
          },
          { name: "twitter:title", content: data?.page_title },
          { name: "twitter:description", content: data?.page_description },
          { name: "robots", content: "noindex" },
        ]}
      />
      <Hero content={data} />
    </>
  );
};

export async function getStaticProps({ preview, previewData }) {
  const client = createClient({ previewData });

  const page = (await client.getSingle("we_got_you")) || {};

  return {
    props: {
      page,
    },
  };
}

export default WeGotYou;
