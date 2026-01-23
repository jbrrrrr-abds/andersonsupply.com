import React from 'react';
import { Helmet } from 'react-helmet';
import { createClient } from "prismicio";
import * as prismic from "@prismicio/client";
import * as prismicH from "@prismicio/helpers";
import Hero from "components/general-page/Hero";
import Modal from "components/Modal";
import SimpleContent from "components/general-page/SimpleContent";
import { useModal } from "components/Modal/GullsModal";
import YouTubeModal from "components/Modal/YouTubeModal";

const GalleryItemSingle = ({ page, marquee }) => {
  const { modalOpen } = useModal();

  if (!page) return null;
  const { data } = page;

  const { data: marqueeData } = marquee;
  const html_content = prismicH.asHTML(data.page_content);

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
      <main>
        <Hero title={data.page_title} />
      </main>
      <SimpleContent content={html_content} />
      <Modal>
        <YouTubeModal youTubeID={modalOpen} />
      </Modal>
    </>
  );
};

export async function getStaticProps({ params, preview, previewData }) {
  const client = createClient({ previewData });
  const page =
    (await client.getByUID("gallery_item", params.uid)) || {};
  const marquee = (await client.getSingle("marquee")) || {};

  return {
    props: {
      page,
      marquee,
    },
  };
}

export async function getStaticPaths() {
  const pages = await createClient().get({
    predicates: prismic.filter.at("document.type", "gallery_item"),
  });
  const paths = pages?.results?.map((page) => ({ params: { uid: page.uid } }));

  return {
    paths,
    fallback: false,
  };
}

export default GalleryItemSingle;
