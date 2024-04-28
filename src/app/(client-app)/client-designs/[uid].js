import React from "react";
import { Helmet } from "react-helmet";
import { Client } from "util/prismicHelpers";
import Prismic from "@prismicio/client";

import ClientDesignAuth from "../../../components/ClientDesignAuth/";

export default function Page() {
  return <h1>wee!</h1>;
}
/*const ClientDesignArchiveTemplate = ({ page }) => {
  if (!page) return null;
  const { data } = page;
  const uid = page.uid;

  console.log(page);

  return (
    <>
      <Helmet
        title={data.page_title}
        meta={[
          { name: "google", content: "notranslate" },
          { name: "robots", content: "noindex, nofollow" },
        ]}
      />
      <main>
        <ClientDesignAuth />
      </main>
    </>
  );
};

export async function getStaticProps({
  params,
  preview = null,
  previewData = {},
}) {
  const { ref } = previewData;
  const client = Client();
  const page =
    (await client.getByUID(
      "client_design_archive_page",
      params.uid,
      ref ? { ref } : null,
    )) || {};

  return {
    props: {
      preview,
      page,
    },
  };
}

export async function getStaticPaths() {
  const pages = await Client().query(
    Prismic.Predicates.at("document.type", "client_design_archive_page"),
  );
  const paths = pages?.results?.map((page) => ({ params: { uid: page.uid } }));

  return {
    paths,
    fallback: false,
  };
}

export async function getServerSideProps() {
  //
}

export default ClientDesignArchiveTemplate;
*/
