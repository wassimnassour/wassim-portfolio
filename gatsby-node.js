const path = require(`path`);
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
        edges {
          node {
            frontmatter {
              slug
              title
            }
            id
          }
        }
      }
    }
  `);

  const postPerPage = 3;
  const numPages = Math.ceil(data.allMarkdownRemark.edges.length / postPerPage);
  const blogListLayout = path.resolve(`src/templete/allPosts/allPosts.jsx`);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `blog/1` : `blog/${i + 1}`,
      component: blogListLayout,
      context: {
        limit: postPerPage,
        skip: i * postPerPage,
        currentPage: i + 1,
        numPages,
      },
    });
  });

  // Create Single Post
  const posts = data.allMarkdownRemark.edges;
  posts.forEach(({ node }, index) => {
    createPage({
      path: `/blog/${node.frontmatter.slug}`,
      component: path.resolve(`src/templete/blog/post.jsx`),
      context: {
        slug: node.frontmatter.slug,
        prev: index === 0 ? null : posts[index - 1].node.frontmatter,
        next:
          index === posts.length - 1 ? null : posts[index + 1].node.frontmatter,
      },
    });
  });
};
