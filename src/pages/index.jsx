import React from "react";
import {
  Layout,
  HomeContent,
  Skills,
  Project,
  Blog,
  Seo,
} from "../components/index";

export default function Home() {
  return (
    <Layout>
      <Seo
        title="Home"
        description="Hi,i'm Wassim Nassour Self-taught front-end developer . i built this Portfolio With React and Gatsby "
      />
      <HomeContent />
      <Skills />
      <Blog />
    </Layout>
  );
}
