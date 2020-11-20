const path = require(`path`);
const kebabCase = require(`lodash.kebabcase`);
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
              category
            }
            id
          }
        }
      }
    }
  `);
  //Creating the pages programmatically
  const postsPerPage = 3;
  const numPages = Math.ceil(
    data.allMarkdownRemark.edges.length / postsPerPage
  );
  const blogListLayout = path.resolve(`src/templete/allPosts/allPosts.jsx`);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `blog/1` : `blog/${i + 1}`,
      component: blogListLayout,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
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
      },
    });
  });

  // getting Categories
  const blogCategoryLayout = path.resolve(
    `src/templete/blogCategory/blogCategory.jsx`
  );
  const categories = [];
  posts.forEach(post =>
    post.node.frontmatter.category.forEach(cat => categories.push(cat))
  );
  const countCategories = categories.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  const allCategories = Object.keys(countCategories);
  allCategories.forEach((category, _i) => {
    const link = `/blog/category/${kebabCase(category)}`;

    Array.from({
      length: Math.ceil(countCategories[category] / postsPerPage),
    }).forEach((_, i) =>
      createPage({
        path: i === 0 ? link : `${link}/page/${i + 1}`,
        component: blogCategoryLayout,
        context: {
          allCategories: allCategories,
          category: category,
          limit: postsPerPage,
          skip: i * postsPerPage,
          currentPage: i + 1,
          numPages: Math.ceil(countCategories[category] / postsPerPage),
        },
      })
    );
  });
};
