module.exports = {
  output: "export",
  outputFileTracingRoot: __dirname,
  compiler: {
    styledComponents: true,
  },
  env: {
    SITE_URL: process.env.SITE_URL,
    NO_INDEX: process.env.NO_INDEX,
  },
};
