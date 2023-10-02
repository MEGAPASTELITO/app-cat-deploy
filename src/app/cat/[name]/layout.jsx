import ListOfCatByName from "../../../component/ListOfCartByName/ListOfCatByName";

export default function Post({ params, children }) {
	const { name } = params;
	const newname = name.replace(/%20/g, " ");
	return (
		<div>
			<ListOfCatByName name={newname}>{children}</ListOfCatByName>
		</div>
	);
}
