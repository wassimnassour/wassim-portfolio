import React from "react";
import kebabCase from "lodash.kebabcase";
import Img from "gatsby-image";
import { Link } from "gatsby";
import { PostWrapper, Categories, Category, ImageWrapper } from "./post.style";
const Post = ({
	image,
	categories,
	description,
	link,
	id,
	title,
	location,
}) => {
	return (
		<PostWrapper key={id} location={location}>
			<ImageWrapper location={location}>
				<Link to={`/blog/${link}`}>
					<Img fluid={image} />
				</Link>
			</ImageWrapper>

			{categories && (
				<Categories location={location}>
					{categories.map(category => (
						<Category location={location} category={category} key={category}>
							<Link
								to={`/blog/category/${kebabCase(category)}`}
								className="category_link"
							>
								{category}
							</Link>
						</Category>
					))}
				</Categories>
			)}
			<div className="box-text">
				<Link to={`/blog/${link}`}>
					<h1>{title}</h1>
					<p>{description}...</p>
				</Link>
			</div>
		</PostWrapper>
	);
};

export default Post;
