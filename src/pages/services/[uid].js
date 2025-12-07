import React from 'react';
import { Helmet } from 'react-helmet';
import { Client } from 'util/prismicHelpers';
import * as prismic from "@prismicio/client";
import Hero from 'components/services/blocks/Hero';
import Intro from 'components/services/blocks/Intro';
import Video from 'components/services/blocks/Video';
import Quote from 'components/Quote';
import Value from 'components/services/blocks/Value';
import MarqueeBlock from 'components/MarqueeBlock';
import Modal from 'components/Modal';
import { useModal } from 'components/Modal/GullsModal';
import YouTubeModal from 'components/Modal/YouTubeModal';

const ServicesSingle = ({ page, marquee }) => {
  const { modalOpen } = useModal();

  if (!page) return null;

  const { data } = page;
  const { data: marqueeData } = marquee;

  return (
    <>
      <Helmet
        title={data.page_title}
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
          headline={data?.hero_title}
          image={data?.hero_image}
        />
        <Intro
          introTitle={data?.intro_title}
          introDescription={data?.intro_description}
          introImage={data?.intro_image}
          smallImage={data?.image_grid_left_image}
          bigImage={data?.image_grid_right_image}
        />
        <Video
          videoId={data?.video_id}
        />
        <Quote
          image={data?.quote_image}
          quote={data?.quote}
          quotee={data?.quotee}
          title={data?.quote_title}
          description={data?.quote_description}
          link={data?.quote_link}
          linkText={data?.quote_link_text}
        />
        <Value
          valueTitle={data?.value_title}
          valueSubTitle={data?.value_sub_title}
          valueDescription={data?.value_description}
          valueLink={data?.value_link}
          valueLinkText={data?.value_link_text}
          valueImageLeft={data?.value_image_left}
          valueImageRight={data?.value_image_right}
        />
        <MarqueeBlock
          marqueeID={page?.id}
          content={marqueeData}
        />
      </main>
      <Modal>
        <YouTubeModal youTubeID={modalOpen} />
      </Modal>
    </>
  );
};

export async function getStaticProps({ params, preview = null, previewData = {} }) {
  const { ref } = previewData;
  const client = Client();
  const page = (await client.getByUID('services_single', params.uid, ref ? { ref } : null)) || {};
  const marquee = (await client.getSingle('marquee')) || {};

  return {
    props: {
      preview,
      page,
      marquee,
    },
  };
}

export async function getStaticPaths() {
  const pages = await Client().query(
    prismic.predicate.at("document.type", "services_single"),
  );
  const paths = pages?.results?.map(page => ({ params: { uid: page.uid } }));

  return {
    paths,
    fallback: false,
  };
}

export default ServicesSingle;
