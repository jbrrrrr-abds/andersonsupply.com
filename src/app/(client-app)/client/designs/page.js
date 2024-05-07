import React from "react";
import { Client } from "util/prismicHelpers";
import Prismic from "@prismicio/client";
import { headers } from 'next/headers';

const getPrismicPage = () => {
  const client = Client();
  /*
  const headersList = headers();
  const designArchive = headersList.get('designArchive');

  if (!designArchive) {
    return null;
  }
  console.log(client);
  console.log(designArchive);
  */
  return client.getByUID("client_design_archive_page", 'sierra-nevada-designs');
}

export default async function ClientDesignArchiveTemplate() {
  const prismicData = await getPrismicPage();
  if (!prismicData) return null;
  const { data } = prismicData;

  return (
    <>
      <main>
        <h2 className="mb-12 text-4xl">{data.client_name} Designs</h2>
        <section className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {data.design_unit.map((unit, i) => (
            <div key={i}>
              <div>
                <img
                  className="m-w-full"
                  src={unit.design_artwork.url}
                  alt={unit.design_name.text}
                />
                <div>
                  <input type="checkbox" className="hidden"></input>
                </div>
              </div>
              <h3 className="mt-1 text-xs font-bold leading-4 text-center">
                {unit.design_name[0].text}
              </h3>
            </div>
          ))}
        </section>
        </main>
    </>
  );
}

export async function generateStaticParams() {
  const pages = await Client().query(
    Prismic.Predicates.at("document.type", "client_design_archive_page"),
  );
  const paths = pages?.results?.map((page) => ({ slug: page.uid }));
  return paths;
}


