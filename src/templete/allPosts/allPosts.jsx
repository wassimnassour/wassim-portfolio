import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { BlogSectionWrapper, PostWrapper } from "./allPosts.style";
import { Layout, BigTitle } from "../../components/index";
const AllPosts = ({ data }) => {
  const {
    allMarkdownRemark: { nodes: posts },
  } = data;
  console.log(posts);
  return (
    <Layout>
      <BigTitle>Blog</BigTitle>
      <BlogSectionWrapper>
        {posts.map(post => (
          <PostWrapper key={post.id}>
            <Link to={`/blog/${post.frontmatter.slug}`}>
              <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
              <div className="box-text">
                <h1>{post.frontmatter.title}</h1>
                <p>{post.excerpt}...</p>
              </div>
            </Link>
          </PostWrapper>
        ))}
      </BlogSectionWrapper>
    </Layout>
  );
};

export const query = graphql`
  query($limit: Int, $skip: Int) {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: {}
      limit: $limit
      skip: $skip
    ) {
      nodes {
        id
        excerpt(pruneLength: 200)
        frontmatter {
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          slug
          title
        }
      }
    }
  }
`;

export default AllPosts;
