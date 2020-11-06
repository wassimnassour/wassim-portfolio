import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql, Link } from "gatsby";
import { PostContainer, BlogSectionWrapper, PostWrapper } from "./posts.style";
const Posts = () => {
  return (
    <PostContainer>
      <BlogSectionWrapper>
        {/* {posts.map(post => (
          <PostWrapper key={post.id}>
            <Link to={post.slug}>
              <Img fluid={post.image.fluid} />
              <div className="box-text">
                <h1>{post.title}</h1>
                <p>{post.descrption1.descrption1}</p>
              </div>
            </Link>
          </PostWrapper>
        ))} */}
      </BlogSectionWrapper>
    </PostContainer>
  );
};

export default Posts;
