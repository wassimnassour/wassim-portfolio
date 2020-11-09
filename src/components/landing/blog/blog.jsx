import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { BlogContainer, BlogWrapper, Articles } from "./blog.style";
import { Title } from "../../utilityStyle";
import Img from "gatsby-image";
import { CustomButton } from "../../index";

const Blog = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(limit: 3) {
        nodes {
          id
          frontmatter {
            slug
            title
            date
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);
  const { allMarkdownRemark } = data;
  return (
    <BlogContainer>
      <Title>Latest post</Title>
      <BlogWrapper>
        {allMarkdownRemark.nodes.map(Article => (
          <Articles key={Article.id}>
            <Link to={`blog/${Article.frontmatter.slug}`}>
              <Img
                fluid={Article.frontmatter.image.childImageSharp.fluid}
                alt={Article.frontmatter.title}
              />

              <h1>{Article.frontmatter.title} </h1>
            </Link>
          </Articles>
        ))}
      </BlogWrapper>
      <CustomButton color="black" content="See more" url="/blog" />
    </BlogContainer>
  );
};

export default Blog;
