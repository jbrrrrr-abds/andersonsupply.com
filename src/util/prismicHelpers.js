import * as prismic from "@prismicio/client";
import { apiEndpoint, accessToken } from "../../prismic";

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (link) => {
  if (link.link_type === "Document") {
    switch (link.type) {
      case "services_single":
        return `/services/${link.uid}`;
      default:
        return `/${link.type}`;
    }
  }
  return link.url;
};

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};

  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};

  return {
    ...reqOption,
    ...accessTokenOption,
  };
};

// Client method to query documents from the Prismic repo
export const Client = (req = null) =>
  prismic.createClient(apiEndpoint, createClientOptions(req, accessToken));

export default Client;
