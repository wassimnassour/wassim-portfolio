import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { FaAngleDoubleRight } from "react-icons/fa";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import RehypeReact from "rehype-react";
import { Layout, Seo } from "../../components/index";
import { PostWrapper, H1, H2, H3, H4, Li, P, Strong, A } from "./post.style";

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    li: Li,
    p: P,
    strong: Strong,
    a: A,
  },
}).Compiler;

const Blog = ({ data, pageContext }) => {
  const { prev, next } = pageContext;
  const { markdownRemark } = data;
  deckDeckGoHighlightElement();

  return (
    <Layout>
      <Seo
        title={markdownRemark.frontmatter.title}
        description={markdownRemark.excerpt}
      />
      <PostWrapper>
        <h1 className="title">{markdownRemark.frontmatter.title}</h1>
        <Img
          fluid={markdownRemark.frontmatter.image.childImageSharp.fluid}
          objectFit="contain"
          objectPosition="50% 50%"
        />

        {renderAst(markdownRemark.htmlAst)}
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
        </div>
      </PostWrapper>
    </Layout>
  );
};

export const query = graphql`
  query getPost($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        slug
      }
      html
      htmlAst
    }
  }
`;
export default Blog;
