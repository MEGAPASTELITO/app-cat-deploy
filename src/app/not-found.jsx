import Image from "next/image";
import Link from "next/link";

function Page404() {
	return (
		<>
			<div>
				<h1>404 not fount</h1>
				<Image
					src={"https://i.ibb.co/b5CwJZf/404.png"}
					alt="img de cat 404"
					width="400"
					height="400"
				/>
				<br />
				<Link href="/">Home</Link>
			</div>
		</>
	);
}

export default Page404;
