import React from "react";
import { Link } from "gatsby";
import { PagintionList } from "./pagination.style";
const Pagination = ({ pageContext }) => {
	console.log("pageContext", pageContext);
	const { numPages } = pageContext;
	return (
		<PagintionList>
			{Array.from({ length: numPages }).map((_, _i) => {
				const index = _i + 1;
				return (
					<li key={index}>
						{pageContext.currentPage === index ? (
							<span>{index}</span>
						) : (
							<Link to={`/blog/${index}`}>{index}</Link>
						)}
					</li>
				);
			})}
		</PagintionList>
	);
};

export default Pagination;
