const withExportImages = require('next-export-optimize-images')

module.exports = withExportImages({
  output: "export",
  compiler: {
    styledComponents: true,
  },
  env: {
    SITE_URL: process.env.SITE_URL,
    NO_INDEX: process.env.NO_INDEX,
  },
});
