import React from 'react';
import { Helmet } from 'react-helmet';
import { createClient } from "prismicio";
import Hero from 'components/process/Hero';
import ThreeColumnGrid from 'components/ThreeColumnGrid';
import Modal from 'components/Modal';
import { useModal } from 'components/Modal/GullsModal';
import YouTubeModal from 'components/Modal/YouTubeModal';
import styled from 'styled-components';
import screen from 'superior-mq';
import { bp } from '../../styles/helpers';
import Section from 'components/Section';
import Container from 'components/Container';


const Index = ({ page }) => {
  const { modalOpen } = useModal();

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
          title={data?.hero_title}
          subTitle={data?.hero_sub_title}
          description={data?.hero_description}
          image={data?.hero_image}
          videoId={data?.hero_video_id}
        />
        <ThreeColumnGrid />
      </main>
      <Modal>
        <YouTubeModal youTubeID={modalOpen} />
      </Modal>
    </>
  );
};

export async function getStaticProps({ preview, previewData }) {
  const client = createClient({ previewData });

  const page = (await client.getSingle("process")) || {};

  return {
    props: {
      page,
    },
  };
}

export default Index;
