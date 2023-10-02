import Image from "next/image";
import Link from "next/link";
import jsonCats from "../../services/cats.json";
import style from "../../styles/ListOfCatByName.module.css";

export default async function ListOfCatByName({ name, children }) {
	let exitChilldren = null;

	if (children.props.childProp.segment === "info") {
		exitChilldren = false;
	} else {
		exitChilldren = true;
	}

	return (
		<>
			{jsonCats
				.filter((cat) => cat.name === name)
				.map((cat) => {
					return (
						<section className={style.seccion}>
							<Image
								width="10000"
								height="0"
								src={`${cat.image_link}`}
								alt="img the cat"
								className={style.img}
							/>

							{exitChilldren ? (
								<>
									{children}
									<Link href={`/cat/${name}/info`} className={style.link}>
										⬇️
									</Link>
								</>
							) : (
								<>{children}</>
							)}
						</section>
					);
				})}
		</>
	);
}
