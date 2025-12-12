import { createClient as baseCreateClient } from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next/pages";
import sm from "../slicemachine.config.json";

export const repositoryName = sm.repositoryName;

// TODO: Update with your route resolvers.
const routes = [
  { type: "home", path: "/" },
  { type: "services_single", path: "/services/[uid]" },
  { type: "services", path: "/services" },
  { type: "general_content_page", path: "/pages/[uid]" },
  { type: "contact", path: "/contact" },
  { type: "confirmed", path: "/confirmed" },
  { type: "process", path: "/process" },
  { type: "work", path: "/work" },
  { type: "about", path: "/about-us" },
];

export function createClient({
  req,
  previewData,
  ...config
} = {}) {
  const client = baseCreateClient(repositoryName, {
    routes,
    ...config,
  });

  enableAutoPreviews({ client, req, previewData });

  return client;
}
