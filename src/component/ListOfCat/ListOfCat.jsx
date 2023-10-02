import Image from "next/image";
import Link from "next/link";
import jsonCats from "../../services/cats.json";
import style from "../../styles/ListOfCat.module.css";

export function ListOfCat() {
	return (
		<>
			{jsonCats.map((cat) => {
				return (
					<section key={cat.name} className={style.seccion}>
						<Link href={`/cat/${cat.name}`}>
							<Image
								width="10000"
								height="0"
								src={cat.image_link}
								alt="img the cat"
								className={style.img}
							/>
							<div className={style.content}>
								<p className={style.title}>
									<b>name:</b>
									{cat.name}
								</p>
								<p className={style.subTitle}>
									<b>origin:</b>
									{cat.origin}
								</p>
							</div>
						</Link>
					</section>
				);
			})}
		</>
	);
}
