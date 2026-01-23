import React from 'react';
import { Helmet } from 'react-helmet';
import Script from 'next/script';
import { createClient } from "prismicio";
import * as prismic from "@prismicio/client";
import * as prismicH from "@prismicio/helpers";
import Hero from "components/general-page/Hero";
import Modal from "components/Modal";
import GalleryHolder from "components/GalleryHolder";
import { useModal } from "components/Modal/GullsModal";
import YouTubeModal from "components/Modal/YouTubeModal";

const Index = ({ page, marquee, galleryItems }) => {
  const { modalOpen } = useModal();

  if (!page) return null;
  const { data } = page;

  const { data: marqueeData } = marquee;

  return (
    <>
      <Helmet
        title={data.page_title}
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
      <Script type="text/javascript" src="//assets.pinterest.com/js/pinit.js" strategy="afterInteractive" />
      <main>
        <Hero title={data.page_title} />
        <GalleryHolder itemList={ galleryItems }/>
      </main>
      <Modal>
        <YouTubeModal youTubeID={modalOpen} />
      </Modal>
    </>
  );
};

export async function getStaticProps({ params, preview, previewData }) {
  const client = createClient({ previewData });

  const page = (await client.getSingle("gallery")) || {};
  const marquee = (await client.getSingle("marquee")) || {};
  const galleryItems = (await client.getAllByType("gallery_item")) || {};

  return {
    props: {
      page,
      marquee,
      galleryItems
    },
  };
}

export default Index;
