/**
 * @typedef {import("@prismicio/client").Content.LandingPageContentSimpleSlice} LandingPageContentSimpleSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LandingPageContentSimpleSlice>} LandingPageContentSimpleProps
 * @type {import("react").FC<LandingPageContentSimpleProps>}
 */
import React from "react";

const LandingPageContentSimple = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for landing_page_content_simple (variation:{" "}
      {slice.variation}) Slices
      <div>
        <h1>title</h1>
        <h2>subtitle</h2>
        <div class="main-image-holder">
          <img src="" alt="" />
        </div>
        <p>line 1</p>
        <p>line 2</p>
      </div>
    </section>
  );
};

export default LandingPageContentSimple;
