const path = require("path");
exports.cretePages = async ({ graphql, actions }) => {
	const { cretePage } = actions;
	const Resualt = qraphql(` querySlug {
  allContentfulBlogPost {
    nodes {
      slug
    }
   }
 }`);
	Resualt.allContentfulBlogPost.nodes.forEach(node => {
		cretePage({
			path: `blog/${node.slug}`,
			components: path.resolve("your Templete Here"),
			context: { slug: node.slug },
		});
	});
};
