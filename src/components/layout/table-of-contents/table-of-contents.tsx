import React, { memo, useEffect, useState } from "react";

import "./table-of-contents.css";

export type TocItem = {
	id: string;
	label: string;
};

export type TableOfContentsProps = {
	items: TocItem[];
};

export const TableOfContents = memo<TableOfContentsProps>(({ items }) => {
	const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveId(entry.target.id);
					}
				});
			},
			{ rootMargin: "-20% 0px -60% 0px", threshold: 0 },
		);

		items.forEach(({ id }) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	}, [items]);

	const handleClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		id: string,
	) => {
		e.preventDefault();
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<nav className="toc">
			<ul className="toc-list">
				{items.map(({ id, label }) => (
					<li key={id}>
						<a
							href={`#${id}`}
							className={`toc-link${activeId === id ? " toc-link--active" : ""}`}
							onClick={(e) => handleClick(e, id)}
						>
							{label}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
});
