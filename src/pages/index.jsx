import React from "react";
import { Layout, HomeContent, Skills, Project } from "../components/index";

export default function Home() {
  return (
    <Layout>
      <HomeContent />
      <Skills />
      <Project />
    </Layout>
  );
}
