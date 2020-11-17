import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { BlogContainer, BlogWrapper } from "./blog.style";
import { Title } from "../../utilityStyle";
import { CustomButton, Post } from "../../index";

const Blog = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(limit: 3) {
        nodes {
          id
          excerpt(pruneLength: 200)

          frontmatter {
            slug
            title
            date
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
          />
        ))}
      </BlogWrapper>
      <CustomButton color="black" content="See more" url="/blog/1" />
    </BlogContainer>
  );
};

export default Blog;
