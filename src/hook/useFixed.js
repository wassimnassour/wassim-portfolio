import { useState, useEffect } from "react";

export const useFixed = () => {
	const [fixed, setFixed] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", setHeaderFixed);

		return () => {
			window.removeEventListener("scroll", setHeaderFixed);
		};
	}, []);
	const setHeaderFixed = () => {
		if (window.scrollY >= 50) {
			setFixed(true);
		} else {
			setFixed(false);
		}
	};
	return { fixed };
};
