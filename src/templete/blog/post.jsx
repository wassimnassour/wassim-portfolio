import React from "react";
import { graphql } from "gatsby";
import Disqus from 'disqus-react'
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import RehypeReact from "rehype-react";
import { Layout, Seo } from "../../components/index";
import { PostWrapper, Comments , H1, H2, H3, H4, Li, P, Strong, A } from "./post.style";

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
  const { markdownRemark } = data;
  deckDeckGoHighlightElement();
  const disqusShortName = "http-wassimnassour-vercel-app";

  let disqusConfig = {
    url: `https://wassimnassour.vercel.app/blog/${markdownRemark.frontmatter.slug}`,
    identifier: markdownRemark.id,
    title: markdownRemark.frontmatter.title,
  };
  return (
    <Layout>
      <Seo
        title={markdownRemark.frontmatter.title}
        description={markdownRemark.excerpt}
        image={markdownRemark.frontmatter.image.publicURL}
        article
      />
      <PostWrapper>
        <h1 className="title">{markdownRemark.frontmatter.title}</h1>
        <span>
          created by {markdownRemark.frontmatter.author} in{" "}
          {markdownRemark.frontmatter.date}{" "}
        </span>

        {renderAst(markdownRemark.htmlAst)}
        <Comments>
        <Disqus.DiscussionEmbed
          shortname={disqusShortName}
          config={disqusConfig}
        />
        </Comments>
      </PostWrapper>
    </Layout>
  );
};

export const query = graphql`
  query getPost($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      frontmatter {
        image {
          publicURL
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        slug
        author
        date
      }
      html
      htmlAst
    }
  }
`;
export default Blog;
