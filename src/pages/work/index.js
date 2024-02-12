import React from 'react';
import { Helmet } from 'react-helmet';
import { Client } from 'util/prismicHelpers';
import RecentWorkCarousel from 'components/work/RecentWorkCarousel';
import ProductGrid from 'components/work/ProductGrid';
import MoreWorkCarousel from 'components/work/MoreWorkCarousel';
import TestimonialsCarousel from 'components/TestimonialsCarousel';
import OurWorkCustomerExperience from 'components/work/OurWorkCustomerExperience';
import MarqueeBlock from 'components/MarqueeBlock';
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
        <BlackLogoGrid
          title={data?.work_title}
          logoRowOne={data?.logo_row_one}
          logoRowTwo={data?.logo_row_two}
          logoRowThree={data?.logo_row_three}
          logoRowFour={data?.logo_row_four}
        />
        <RecentWorkCarousel
          slides={data?.recent_work}
        />
        <ProductGrid
          images={data?.product_grid}
          link={data?.product_grid_link}
          linkText={data?.product_grid_link_text}
        />
        <MoreWorkCarousel
          title={data?.more_work_title}
          slides={data?.more_work}
        />
        <TestimonialsCarousel
          padding
          title={data?.testimonials_title}
          testimonials={data?.testimonials}
          image={data?.testimonials_background}
        />
        <OurWorkCustomerExperience
          image={data?.two_column_image}
          title={data?.two_column_title}
          description={data?.two_column_description}
          linkText={data?.two_column_link_text}
          linkUrl={data?.two_column_link}
        />
        <MarqueeBlock
          marqueeID={page?.id}
          content={data?.marquee?.data}
        />
      </main>
    </>
  );
};

export async function getStaticProps({ preview = null }) {

  const fields = [
    'testimonial.quote',
    'testimonial.quotee',
    'marquee.first_text_content',
    'marquee.second_text_content',
    'marquee.third_text_content',
    'marquee.link',
    'marquee.link_text',
  ];

  const client = Client();

  const page = (await client.getSingle('work', { fetchLinks: fields })) || {};

  return {
    props: {
      page,
      preview,
    },
  };
}

export default Index;
