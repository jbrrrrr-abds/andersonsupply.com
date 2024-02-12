import React from 'react';
import { Helmet } from 'react-helmet';
import { Client } from 'util/prismicHelpers';
import HeroCarousel from 'components/home/HeroCarousel';
import Work from 'components/home/Work';
import Services from 'components/home/Services';
import Kiss from 'components/home/Kiss';
import TestimonialsCarousel from 'components/TestimonialsCarousel';
import Video from 'components/home/Video';
import Teamwork from 'components/home/TeamWork';
import MarqueeBlock from 'components/MarqueeBlock';
import Modal from 'components/Modal';
import { useModal } from 'components/Modal/GullsModal';
import YouTubeModal from 'components/Modal/YouTubeModal';

const Index = ({ page }) => {
  const { modalOpen } = useModal();

  if (!page) return null;

  const { data } = page;

  return (
    <>
      <Helmet
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
        <HeroCarousel
          slides={data?.hero_carousel}
        />
        <Work
          link={data?.work_link}
          linkText={data?.work_link_text}
          image={data?.work_image}
          mobileImage={data?.work_mobile_image}
        />
        <Services
          title={data?.services_title}
          services={data?.services?.data?.services}
        />
        <Kiss
          title={data?.three_column_title}
          stepItems={data?.three_column_grid}
          linkUrl={data?.three_column_link}
          linkText={data?.three_column_link_text}
        />
        <TestimonialsCarousel
          title={data?.testimonials_title}
          testimonials={data?.testimonials}
        />
        <Video
          title={data?.video_title}
          description={data?.video_description}
          topText={data?.video_top_text}
          bottomText={data?.video_bottom_text}
          video={data?.video}
          videoId={data?.video_id}
        />
        <Teamwork
          title={data?.two_column_title}
          description={data?.two_column_description}
          link={data?.two_column_link}
          linkText={data?.two_column_link_text}
          image={data?.two_column_image}
        />
        <MarqueeBlock
          marqueeID={page?.id}
          content={data?.marquee?.data}
        />
      </main>
      <Modal>
        <YouTubeModal youTubeID={modalOpen} />
      </Modal>
    </>
  );
};

export async function getStaticProps({ preview = null }) {

  const fields = [
    'services_navigation.services',
    'services.link_url',
    'testimonial.quote',
    'testimonial.quotee',
    'marquee.first_text_content',
    'marquee.second_text_content',
    'marquee.third_text_content',
    'marquee.link',
    'marquee.link_text',
  ];

  const client = Client();

  const page = (await client.getSingle('home', { fetchLinks: fields })) || {};

  return {
    props: {
      page,
      preview,
    },
  };
}

export default Index;
