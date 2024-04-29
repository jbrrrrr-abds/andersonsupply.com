import React from "react";
import { Client } from "util/prismicHelpers";
import Prismic from "@prismicio/client";

async function getPrismicPage() {
  const client = Client();
  return client.getByUID("client_design_archive_page", "sierra-nevada-designs");
}
export default async function ClientDesignArchiveTemplate() {
  const prismicData = await getPrismicPage();
  if (!prismicData) return null;
  const { data } = prismicData;

  return (
    <>
      <main>
        <h1 className="text-xl">prismic page</h1>
        <section className="grid grid-cols-4 gap-4">
          {data.design_unit.map((unit, i) => (
            <div key={i} className="p-2 m-2">
              <img
                className="m-w-full"
                src={unit.design_artwork.url}
                alt={unit.design_name.text}
              />
              <h2 className="mt-4 text-center">{unit.design_name[0].text}</h2>
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
  //console.log(paths);

  return paths;
}
