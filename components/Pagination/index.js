import React from "react";
import _ from "lodash";

function Pagination({ items, pageSize, currentPage, onPageChange }) {
	const pageCount = items / pageSize;
	if (Math.ceil(pageCount) === 1) return null;
	const pages = _.range(1, pageCount + 1);
	return (
		<div>
			<ul className="flex w-11/12 mx-auto">
				{pages.map((page) => (
					<li className={`${page == currentPage ? "bg-purple-700 px-5 text-white rounded-md" : ""} cursor-pointer px-10 font-2xl`} key={page} onClick={()=>onPageChange(page)} >
						{page}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Pagination;
