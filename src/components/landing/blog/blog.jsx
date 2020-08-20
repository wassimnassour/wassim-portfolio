import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Blog = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulBlogPost(limit: 3) {
        nodes {
          id
          image {
            fluid {
              src
            }
            title
          }
        }
      }
    }
  `);
  console.log(data);
  return <div></div>;
};

export default Blog;
