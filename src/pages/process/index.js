import React from 'react';
import { Helmet } from 'react-helmet';
import { Client } from 'util/prismicHelpers';
import Hero from 'components/process/Hero';
import Intro from 'components/process/Intro';
import Steps from 'components/process/Steps';
import ImageGrid from 'components/process/ImageGrid';
import Quote from 'components/Quote';
import PreFooter from 'components/process/PreFooter';
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
        <Intro
          title={data?.intro_title}
          description={data?.intro_description}
          graphic={data?.intro_graphic}
        />
        <Steps
          steps={data?.steps}
        />
        <ImageGrid
          title={data?.image_grid_title}
          description={data?.image_grid_description}
          imageOne={data?.image_grid_image_one}
          imageTwo={data?.image_grid_image_two}
          imageThree={data?.image_grid_image_three}
          imageFour={data?.image_grid_image_four}
          graphic={data?.image_grid_graphic}
          link={data?.image_grid_link}
          linkText={data?.image_grid_link_text}
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
        <PreFooter
          leftTitle={data?.two_column_left_title}
          leftLink={data?.two_column_left_link}
          leftLinkText={data?.two_column_left_link_text}
          leftImage={data?.two_column_left_image}
          rightTitle={data?.two_column_right_title}
          rightLink={data?.two_column_right_link}
          rightLinkText={data?.two_column_right_link_text}
          rightImage={data?.two_column_right_image}
        />
      </main>
      <Modal>
        <YouTubeModal youTubeID={modalOpen} />
      </Modal>
    </>
  );
};

export async function getStaticProps({ preview = null }) {

  const client = Client();

  const page = (await client.getSingle('process')) || {};

  return {
    props: {
      page,
      preview,
    },
  };
}

export default Index;
