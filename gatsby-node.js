const path = require(`path`);
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const Resualt = await graphql(`
    {
      allContentfulBlogPost {
        nodes {
          slug
        }
      }
    }
  `);
  Resualt.data.allContentfulBlogPost.nodes.forEach(node => {
    createPage({
      path: `blog/${node.slug}`,
      component: path.resolve(`src/templete/blog/blog.js`),

      context: { slug: node.slug },
    });
  });
};
