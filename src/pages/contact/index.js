import React from 'react';
import { Helmet } from 'react-helmet';
import { createClient } from "prismicio";
import Hero from 'components/contact/Hero';
import Form from 'components/contact/Form';
import BlackLogoGrid from 'components/BlackLogoGrid';

const Index = ({ page }) => {

  if (!page) return null;

  const { data } = page;

  return (
    <>
      <Helmet
        title={data?.page_title}
        meta={[
          { name: 'description', content: data?.page_description },
          { property: 'og:title', content: data?.page_title },
          { property: 'og:description', content: data?.page_description },
          { property: 'og:image', content: `${data?.page_social_image?.url}&w=1200&h=630&fit=crop&q=85&f=center` },
          { name: 'twitter:image', content: `${data?.page_social_image?.url}&w=1200&h=630&fit=crop&q=85&f=center` },
          { name: 'twitter:title', content: data?.page_title },
          { name: 'twitter:description', content: data?.page_description },
        ]}
      />
      <main>
        <Hero
          title={data?.hero_headline}
          image={data?.hero_image}
        />
        <Form
          servicesTitle={data?.services_title}
          designServicesTitle={data?.design_services_title}
          designServices={data?.design_services}
          categoriesTitle={data?.categories_title}
          categories={data?.categories}
          alertText={data?.alert_text}
          timelineTitle={data?.timeline_title}
          turnaroundText={data?.turnaround_alert_text}
          informationTitle={data?.information_title}
          jumboText={data?.jumbo_text}
          faqLink={data?.faq_link}
          faqLinkText={data?.faq_link_text}
        />
        <BlackLogoGrid
          logoRowOne={data?.logo_row_one}
          logoRowTwo={data?.logo_row_two}
          logoRowThree={data?.logo_row_three}
          logoRowFour={data?.logo_row_four}
        />
      </main>
    </>
  );
};

export async function getStaticProps({ preview, previewData }) {
  const fetchLinks = ["logo_grid.logo_grid_title", "logo_grid.logos"];

  const client = createClient({ previewData });

  const page = (await client.getSingle("contact", { fetchLinks })) || {};

  return {
    props: {
      page,
    },
  };
}

export default Index;
