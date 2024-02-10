import React, { useEffect, useState } from 'react';
import App from 'next/app';
import Prismic from '@prismicio/client';
import { Client } from 'util/prismicHelpers';
import { Helmet } from 'react-helmet';
import { useRouter } from 'next/router';
import GlobalStyle from 'styles/global-style';
import TabFocusOutlineStyles from 'components/TabFocusOutlineStyles';
import Header from 'components/Header';
import PageTransition from 'components/PageTransition';
import Footer from 'components/Footer';

const MyApp = ({ Component, pageProps, pageData }) => {
  const { asPath } = useRouter();
  const router = useRouter();
  const [routingPageOffset, setRoutingPageOffset] = useState(0);
  const routeWithoutTrailingSlash = () => router.asPath === '/' ? '/' : router.asPath.replace(/\/$/, '');

  useEffect(() => {
    const pageChange = () => {
      setRoutingPageOffset(window.scrollY);
    };

    router.events.on('routeChangeStart', pageChange);

    return (() => {
      router.events.off('routeChangeStart', pageChange);
    });
  }, [router.events, setRoutingPageOffset, router.asPath]);

  const { results } = pageData;

  return (
    <>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        defaultTitle="Anderson Bros Design and Supply"
        titleTemplate="%s | Anderson Bros Design and Supply"
        meta={[
          { charset: 'UTF-8' },
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: `https://${process.env.SITE_URL}${asPath}` },
          { name: 'twitter:card', content: 'summary_large_image' },
          process.env.NO_INDEX === 'true' ? { name: 'robots', content: 'noindex' } : false,
        ].filter(Boolean)}
      />
      <Header
        allServicesLink={results[0]?.data?.all_services_link}
        allSerficesLinkText={results[0]?.data?.all_services_link_text}
        services={results[2]?.data?.services}
        navItems={results[0]?.data?.navigation_items}
        secondaryNavItems={results[0]?.data?.secondary_navigation_items}
        navButtonLink={results[0]?.data?.navigation_button_link}
        navButtonText={results[0]?.data?.navigation_button_link_text}
      />
      <PageTransition
        routingPageOffset={routingPageOffset}
        route={routeWithoutTrailingSlash()}
      >
        <Component key={router.asPath} {...pageProps} />
        <Footer
          route={routeWithoutTrailingSlash()}
          address={results[1]?.data?.address}
          phoneNumberLink={results[1]?.data?.phone_number_link}
          phoneNumberText={results[1]?.data?.phone_number_text}
          emailAddress={results[1]?.data?.email_address}
          newsletterTitle={results[1]?.data?.newsletter_title}
          jumboText={results[1]?.data?.jumbo_text}
          graphic={results[1]?.data?.graphic}
          siteList={results[1]?.data?.site_navigation_items}
          servicesList={results[2]?.data?.services}
          socialMediaLinks={results[1]?.data?.social_media_links}
        />
      </PageTransition>
      <GlobalStyle />
      <TabFocusOutlineStyles />

      <style jsx>
        {`
          @font-face {
            font-family: "GothamSS";
            src: url(/fonts/GothamSSm-Book.woff2) format('woff2'),
                  url(/fonts/GothamSSm-Book.woff) format('woff');
            font-weight: 400;
          }
          @font-face {
            font-family: "GothamSS";
            src: url(/fonts/GothamSSm-Medium.woff2) format('woff2'),
                  url(/fonts/GothamSSm-Medium.woff) format('woff');
            font-weight: 500;
          }
          @font-face {
            font-family: "GothamSS";
            src: url(/fonts/GothamSSm-Bold.woff2) format('woff2'),
                  url(/fonts/GothamSSm-Bold.woff) format('woff');
            font-weight: 700;
          }
          @font-face {
            font-family: "GothamSS";
            src: url(/fonts/GothamSSm-Black.woff2) format('woff2'),
                  url(/fonts/GothamSSm-Black.woff) format('woff');
            font-weight: 900;
          }
        `}
      </style>
    </>
  );
};

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  const client = Client();

  const ids = [
    // Header
    'YJQrvBEAACEAGlk2',
    // Footer
    'YJRHIREAACEAGtZB',
    // Services Navigation
    'YIg9ABAAACMAMUpk',
  ];

  const pageData = await client.query(
    Prismic.Predicates.in('document.id', ids),
  );

  return {
    ...appProps,
    pageData,
  };
};

export default MyApp;
