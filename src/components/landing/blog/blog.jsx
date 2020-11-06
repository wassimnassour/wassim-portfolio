import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { BlogContainer, BlogWrapper, Article } from "./blog.style";
import { Title } from "../../utilityStyle";
import Img from "gatsby-image";
import { CustomButton } from "../../index";

const Blog = () => {
  return (
    <BlogContainer>
      <Title>Latest post</Title>
      <BlogWrapper>
        {/* {Articles.map(Element => (
          <Article key={Element.id}>
            <Link to={`blog/${Element.slug}`}>
              <Img fluid={Element.image.fluid} alt={Element.title} />

              <h1>{Element.title} </h1>
            </Link>
          </Article>
        ))} */}
      </BlogWrapper>
      <CustomButton color="black" content="See more" url="/blog" />
    </BlogContainer>
  );
};

export default Blog;
