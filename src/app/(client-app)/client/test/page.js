import { Client } from "util/prismicHelpers";
import Prismic from "@prismicio/client";
import { headers } from 'next/headers';


const getPrismicPage = () => {
  const client = Client();
  return client.getByUID("client_design_archive_page", 'sierra-nevada-designs');
}

const TestPage = async () => {
  const prismicData = await getPrismicPage();
  if (!prismicData) return null;
  const { data } = prismicData;

  return (
    <>
      <div className="mt-4">
        <h1 className="text-2xl">Test Page</h1>
        <pre>{ JSON.stringify(data) }</pre>
      </div>
    </>
  )
}

export default TestPage;