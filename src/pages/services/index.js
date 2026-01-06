import React from 'react';
import { Helmet } from 'react-helmet';
import { createClient } from "prismicio";
import Hero from "../../components/services/Hero";
import LogoGrid from "../../components/LogoGrid";
import TextWithImage from "../../components/services/TextWithImage";

const Index = ({ page }) => {
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
        ]}
      />
      <main>
        <Hero
          title={data?.list_title}
          description={data?.list_description}
          services={data?.services?.data?.services}
        />
        <LogoGrid
          pageId="services"
          title={data?.logo_grid?.data?.logo_grid_title}
          logos={data?.logo_grid?.data?.logos}
        />
        <TextWithImage
          title={data?.two_column_title}
          description={data?.two_column_description}
          linkUrl={data?.two_column_link}
          linkText={data?.two_column_link_text}
          image={data?.two_column_image}
          graphic={data?.two_column_graphic}
        />
      </main>
    </>
  );
};

export async function getStaticProps({ previewData }) {
  const fields = [
    "services_navigation.services",
    "services.link_url",
    "logo_grid.logo_grid_title",
    "logo_grid.logos",
  ];

  const client = createClient({ previewData });

  const page =
    (await client.getSingle("services", { fetchLinks: fields })) || {};

  return {
    props: {
      page,
    },
  };
}

export default Index;
