import React from "react";
import { graphql, Link } from "gatsby";
import { Layout, Seo } from "../../components/index";
import { PostWrapper, H1, H2, H3, H4, P, Li } from "./post.style";
import Img from "gatsby-image";
import { FaAngleDoubleRight } from "react-icons/fa";
const Blog = ({ pageContext }) => {
  // const { prev, next } = pageContext;
  console.log("page", pageContext);
  return (
    <Layout>
      {/* <Seo
        title={data.post.title}
        description={data.post.descrption1.descrption1}
      /> */}
      <PostWrapper>
        {/* <h1 className="title">{data.post.title}</h1>
        <Img
          fluid={data.post.image.fluid}
          objectFit="contain"
          objectPosition="50% 50%"
        />
        <div className="buttons">
					{prev && (
						<Link to={`/blog/${prev.slug}`} className="left">
							{" "}
							<FaAngleDoubleRight className="left-icon" />
							{prev.title}
						</Link>
					)}
					<span className="line">|</span>
					{next && (
						<Link to={`/blog/${next.slug}`} className="right">
							{next.title} <FaAngleDoubleRight className="right_icon" />
						</Link>
					)}
				</div> */}
      </PostWrapper>
    </Layout>
  );
};

export default Blog;
