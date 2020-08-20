import React from "react";
import {
  Layout,
  HomeContent,
  Skills,
  Project,
  Blog,
} from "../components/index";

export default function Home() {
  return (
    <Layout>
      <HomeContent />
      <Skills />
      <Project />
      <Blog />
    </Layout>
  );
}
