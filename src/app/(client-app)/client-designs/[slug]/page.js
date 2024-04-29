import React from "react";
import { Client } from "util/prismicHelpers";
import Prismic from "@prismicio/client";

async function getPrismicPage({ params }) {
  const client = Client();
  return client.getByUID("client_design_archive_page", params.slug);
}
export default async function ClientDesignArchiveTemplate({ params }) {
  const prismicData = await getPrismicPage({ params });
  if (!prismicData) return null;
  const { data } = prismicData;

  return (
    <>
      <main>
        <h2 className="mb-4 text-4xl">{data.client_name}</h2>
        <section className="grid grid-cols-8 gap-2">
          {data.design_unit.map((unit, i) => (
            <div key={i} className="p-2 m-2">
              <img
                className="m-w-full"
                src={unit.design_artwork.url}
                alt={unit.design_name.text}
              />
              <h3 className="mt-2 text-xs font-bold leading-4 text-center">
                {unit.design_name[0].text}
              </h3>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
const getStaticPaths = async () => {
  const pages = await Client().query(
    Prismic.Predicates.at("document.type", "client_design_archive_page"),
  );
  const paths = pages?.results?.map((page) => ({ slug: page.uid }));

  return {
    paths,
  };
};

export async function generateStaticParams() {
  const pages = await Client().query(
    Prismic.Predicates.at("document.type", "client_design_archive_page"),
  );
  const paths = pages?.results?.map((page) => ({ slug: page.uid }));
  return paths;
}
