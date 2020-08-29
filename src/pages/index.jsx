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
      <Seo title="Home" />
      <HomeContent />
      <Skills />
      <Project />
      <Blog />
    </Layout>
  );
}
