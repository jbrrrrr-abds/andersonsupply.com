import React from 'react';
import { Helmet } from 'react-helmet';
import { Client } from 'util/prismicHelpers';
import Prismic from '@prismicio/client';
import * as prismicH from "@prismicio/helpers";
import Hero from "components/general-page/Hero";
import Modal from "components/Modal";
import SimpleContent from "components/general-page/SimpleContent";
import { useModal } from "components/Modal/GullsModal";
import YouTubeModal from "components/Modal/YouTubeModal";

const ContentPageSingle = ({ page, marquee }) => {
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

export async function getStaticProps({ params, preview = null, previewData = {} }) {
  const { ref } = previewData;
  const client = Client();
  const page = (await client.getByUID('general_content_page', params.uid, ref ? { ref } : null)) || {};
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
  const pages = await Client().query(Prismic.Predicates.at('document.type', 'general_content_page'));
  const paths = pages?.results?.map(page => ({ params: { uid: page.uid } }));

  return {
    paths,
    fallback: false,
  };
}

export default ContentPageSingle;
