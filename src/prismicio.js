import { createClient as baseCreateClient } from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next/pages";
import sm from "../slicemachine.config.json";

export const repositoryName = sm.repositoryName;

// TODO: Update with your route resolvers.
const routes = [

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
