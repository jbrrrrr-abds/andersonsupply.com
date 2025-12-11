import { exitPreview } from "@prismicio/next/pages";

export default async function exit(req, res) {
  return exitPreview({ req, res });
}
