import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../../components/index";
const AllPosts = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <div></div>
    </Layout>
  );
};

export const query = graphql`
  query all($limit: Int, $skip: Int) {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: {}
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
          }
          id
        }
      }
    }
  }
`;

export default AllPosts;
