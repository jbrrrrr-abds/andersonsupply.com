import React from 'react';
import { Helmet } from 'react-helmet';
import { createClient } from "prismicio";
import Video from "components/about-us/Video";
import CarouselBlock from "components/about-us/CarouselBlock";
import TwoColumn from "components/about-us/TwoColumn";
import TeamGrid from "components/about-us/TeamGrid";
import TheDuke from "components/about-us/TheDuke";
import Modal from "components/Modal";
import { useModal } from "components/Modal/GullsModal";
import YouTubeModal from "components/Modal/YouTubeModal";

const Index = ({ page }) => {
  const { modalOpen } = useModal();

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
        <Video
          topText={data?.hero_top_text}
          bottomText={data?.hero_bottom_text}
          video={data?.hero_video}
          videoId={data?.hero_video_id}
        />
        <CarouselBlock
          title={data?.intro_title}
          subTitle={data?.intro_sub_title}
          description={data?.intro_description}
          slides={data?.intro_carousel}
        />
        <TwoColumn
          title={data?.two_column_title}
          description={data?.two_column_description}
          image={data?.two_column_image}
        />
        <TeamGrid
          title={data?.team_grid_title}
          team={data?.team_member}
          linkTopText={data?.team_grid_link_top_text}
          linkBottomText={data?.team_grid_link_bottom_text}
          link={data?.team_grid_link}
        />
        <TheDuke
          title={data?.pre_footer_title}
          image={data?.pre_footer_image}
          caption={data?.pre_footer_caption}
          subCaption={data?.pre_footer_sub_caption}
          description={data?.pre_footer_description}
          linkUrl={data?.pre_footer_link}
          linkText={data?.pre_footer_link_text}
        />
      </main>
      <Modal>
        <YouTubeModal youTubeID={modalOpen} />
      </Modal>
    </>
  );
};

export async function getStaticProps({ preview, previewData }) {
  const client = createClient({ previewData });

  const page = (await client.getSingle("about")) || {};

  return {
    props: {
      page,
    },
  };
}

export default Index;
