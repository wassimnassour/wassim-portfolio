const path = require(`path`);
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const Resualt = await graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `);

  const posts = Resualt.data.allContentfulBlogPost.edges;
  posts.forEach(({ node }, index) => {
    createPage({
      path: `blog/${node.slug}`,
      component: path.resolve(`src/templete/blog/post.jsx`),
      context: {
        slug: node.slug,
        prev: index === 0 ? null : posts[index - 1].node,
        next: index === posts.length - 1 ? null : posts[index + 1].node,
        a: posts,
      },
    });
  });
};
