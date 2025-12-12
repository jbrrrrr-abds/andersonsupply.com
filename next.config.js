module.exports = {
  //output: "export",
  outputFileTracingRoot: __dirname,
  output: "export",
  outputFileTracingRoot: __dirname,
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  },
  env: {
    SITE_URL: process.env.SITE_URL,
    NO_INDEX: process.env.NO_INDEX,
  },
};
