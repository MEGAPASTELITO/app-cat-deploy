export default function ErrorPage({ error }) {
	return (
		<>
			<p
				style={{
					background: "#d00",
					color: "#fff",
					padding: "5px",
					borderRadius: "2px",
				}}
			>
				🐈‍⬛{error}
			</p>
		</>
	);
}
