import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router";

const query = graphql`
	{
		site {
			siteMetadata {
				defaultTitle: title
				siteUrl: url
				author
				defaultDescription: description
			}
		}
	}
`;

const Seo = ({ title, description, image, article }) => {
	const { site } = useStaticQuery(query);

	const { pathname } = useLocation();

	const { defaultTitle, defaultDescription, siteUrl } = site.siteMetadata;
	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		url: `${siteUrl}${pathname}`,
	};
	return (
		<Helmet htmlAttributes={{ lang: "en" }} title={seo.title}>
			<meta name="description" content={seo.description} />
			<meta name="image" content={seo.image} />
			{seo.url && <meta property="og:url" content={seo.url} />}
			{(article ? true : null) && <meta property="og:type" content="article" />}
			{seo.title && <meta property="og:title" content={seo.title} />}

			{seo.description && (
				<meta property="og:description" content={seo.description} />
			)}
			{seo.title && <meta name="twitter:title" content={seo.title} />}
		</Helmet>
	);
};

export default Seo;
