import React from 'react';
import { Helmet } from 'react-helmet';
import { createClient } from "prismicio";
import Hero from 'components/process/Hero';
import Modal from 'components/Modal';
import Button from "components/Button";
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
        <Hero
          title={data?.hero_title}
          subTitle={data?.hero_sub_title}
          description={data?.hero_description}
          image={data?.hero_image}
          videoId={data?.hero_video_id}
        />
        <div className="support-grid">
          <div className="card portal">
            <h2>Portal</h2>
            <p>
              Sign in to your account to view quotes and order status updates.
            </p>
            <Button
              href="https://5823129.app.netsuite.com/app/login/secure/privatelogin.nl?c=5823129"
              isdark="false"
              target="_blank"
            >
              Portal Login
            </Button>
          </div>
          <div className="card new-customer">
            <h2>New Customer Form</h2>
            <p>
              Clients can find the registration form for their account here.
            </p>
            <Button
              href="https://5823129.extforms.netsuite.com/app/site/crm/externalleadpage.nl/compid.5823129/.f?formid=3&h=AAFdikaI5mfWyeltusYCQ0AWjEetY6wmWieA5z2fAIR7K5TjI2c&redirect_count=1&did_javascript_redirect=T"
              target="_blank"
              isdark="false"
            >
              New Client Setup Form
            </Button>
          </div>
          <div className="card contact">
            <h2>Contact Us</h2>
            <p>
              Questions? Comments? Drop us a line and we'll get back to you as
              soon as we can.
            </p>
            <ul>
              <li>
                <a href="mailto:info@andersonsupply.com">
                  info&#64;andersonsupply (dot) com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Modal>
        <YouTubeModal youTubeID={modalOpen} />
      </Modal>
      <style jsx>
        {`
        .support-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          padding: var(--spacing);
          gap: calc(var(--spacing) / 2);

          .card {
            grid-column: span 2;
            padding: calc(var(--spacing) / 4);

            @media screen and (width <= 800px) {
              grid-column: span 6;
              border-bottom: 1px solid var(--gold);
              padding-bottom: calc(var(--spacing) / 2);
              margin-bottom: calc(var(--spacing) / 2);

            ul li a {
              text-decoration: underline;
            }
          }
        }
      `}
      </style>
    </>
  );
};

export async function getStaticProps({ preview, previewData }) {
  const client = createClient({ previewData });

  const page = (await client.getSingle("support")) || {};

  return {
    props: {
      page,
    },
  };
}

export default Index;
