import jsonCats from "../../services/cats.json";
import style from "../../styles/ListOfCatInfo.module.css";

const calification = (number) => {
	if (number === 0) return "No";
	if (number >= 1 && number <= 3) return "no volver";
	if (number >= 4 && number <= 7) return "aceptable";
	if (number >= 8 && number <= 10) return "yes";
};

export default function ListOfCatInfo({ name }) {
	return (
		<>
			{jsonCats
				.filter((cat) => cat.name === name)
				.map((cat) => {
					return (
						<div className={style.container}>
							<p>raze:</p>
							<p>
								<b>{cat.name}</b>
							</p>
							<p>max weight:</p>
							<p>
								<b>{cat.max_weight}</b>
							</p>
							<p>min weight:</p>
							<p>
								<b>{cat.max_weight}</b>
							</p>
							<p>min life expectancy:</p>
							<p>
								<b>{cat.min_life_expectancy} years</b>
							</p>
							<p>max life expectancy:</p>
							<p>
								<b>{cat.max_life_expectancy} years</b>
							</p>
							<p>other pets friendly:</p>
							<p>
								<b>{calification(cat.other_pets_friendly)}</b>
							</p>
							<p>intelligence:</p>
							<p>
								<b>{calification(cat.intelligence)}</b>
							</p>
							<p>grooming:</p>
							<p>
								<b>{calification(cat.grooming)}</b>
							</p>
							<p>children friendly:</p>
							<p>
								<b>{calification(cat.children_friendly)}</b>
							</p>
							<p>playfulness:</p>
							<p>
								<b>{calification(cat.playfulness)}</b>
							</p>
							<p>general health:</p>
							<p>
								<b>{calification(cat.general_health)}</b>
							</p>
							<p>shedding:</p>
							<p>
								<b>{calification(cat.shedding)}</b>
							</p>
							<p>family friendly:</p>
							<p>
								<b>{calification(cat.family_friendly)}</b>
							</p>
						</div>
					);
				})}
		</>
	);
}
