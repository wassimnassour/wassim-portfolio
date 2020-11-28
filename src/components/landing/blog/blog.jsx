import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Fade from "react-reveal/Fade";

import { BlogContainer, BlogWrapper } from "./blog.style";
import { Title } from "../../utilityStyle";
import { CustomButton, Post } from "../../index";

const Blog = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        limit: 3
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { featured: { eq: true } } }
      ) {
        nodes {
          id
          excerpt(pruneLength: 170)

          frontmatter {
            slug
            title
            date
            author
            category
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
      <Fade bottom>
        <BlogWrapper>
          {allMarkdownRemark.nodes.map(Article => (
            <Post
              location="homePage"
              key={Article.id}
              image={Article.frontmatter.image.childImageSharp.fluid}
              title={Article.frontmatter.title}
              link={Article.frontmatter.slug}
              description={Article.excerpt}
              categories={Article.frontmatter.category}
              date={Article.frontmatter.date}
              author={Article.frontmatter.author}
            />
          ))}
        </BlogWrapper>
      </Fade>

      <CustomButton color="black" content="See more" url="/blog/1" />
    </BlogContainer>
  );
};

export default Blog;
