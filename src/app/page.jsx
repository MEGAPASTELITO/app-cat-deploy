import Image from "next/image";

export default function HomePage() {
	return (
		<>
			<h1>app the cats</h1>
			<Image
				width="10000"
				height="0"
				src={
					"https://i.ibb.co/8dX7r6T/Imagen-de-Whats-App-2023-10-01-a-las-20-30-39.jpg"
				}
				alt="img the cat"
				style={{ borderRadius: "5px" }}
			/>
			create by megapastelito
			<br />
			hostyn by google clone
		</>
	);
}
