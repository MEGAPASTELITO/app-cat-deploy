import Link from "next/link";
import styles from "../../styles/Navigation.module.css";

const link = [
	{
		label: "Home",
		route: "/",
	},
	{
		label: "Cats",
		route: "/cat",
	},
];

export function Navigation() {
	return (
		<header className={styles.header}>
			<nav>
				<ul className={styles.navigation}>
					{link.map(({ label, route }) => {
						return (
							<li key={route} className={styles.navigationLi}>
								<Link href={route}>{label}</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
}
