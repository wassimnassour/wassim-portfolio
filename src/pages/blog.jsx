import { Layout, Posts } from "../components/index";
import { BigTitle } from "../components/utilityStyle";
import React from "react";
import { graphql } from "gatsby";

const Blog = ({ data }) => {
  return (
    <Layout>
      <BigTitle>Blog</BigTitle>
      <Posts />
    </Layout>
  );
};

export default Blog;
