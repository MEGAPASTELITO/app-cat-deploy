import ListOfCatInfo from "../../../../component/ListOfCatInfo/ListOfCatInfo";

export default function Post({ params }) {
	const { name } = params;
	const newname = name.replace(/%20/g, " ");
	return (
		<>
			<ListOfCatInfo name={newname} />
		</>
	);
}
