import React from "react";
import bg from "../images/bg.png";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <>
    <img className="bg" src={bg} alt="" />

    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div className="homepage-content">
        <div class="cssans__accessible">CSSans Pro</div>

        <div class="cssans__word">
          <b class="cssans:J" />
          <b class="cssans:a" />
          <b class="cssans:m" />
          <b class="cssans:i" />
          <b class="cssans:e" />
        </div>

        <div class="cssans__word">
          <b class="cssans:O" />
          <b class="cssans:'" />
          <b class="cssans:C" />
          <b class="cssans:o" />
          <b class="cssans:n" />
          <b class="cssans:n" />
          <b class="cssans:e" />
          <b class="cssans:l" />
          <b class="cssans:l" />
        </div>
        <h2>Web Developer</h2>
        <p>
          Currently working as a Technician and Sales assistant for Harvey
          Norman Noosa. In my spare time. I am expanding my full stack
          javascript skills through side projects. Actively seeking an
          internship or entry-level job where I can further expand these skills.
        </p>
      </div>
    </Layout>
  </>
);

export default IndexPage;
