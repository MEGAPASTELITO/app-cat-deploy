"use client";

import { useState } from "react";

export function LikeButtom() {
	const [isLike, setIsLike] = useState(false);

	const handleClik = () => {
		setIsLike(!isLike);
	};

	return (
		<>
			<button onClick={handleClik}>{isLike ? "💛" : "💖"}</button>
		</>
	);
}
