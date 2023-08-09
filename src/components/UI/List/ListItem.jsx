const ListItem = ({ id, name, number, num, deleteTodo }) => {
	return (
		<li className="list bg-white my-2 p py-2 flex items-center justify-between">
			<span className="bg-orange-400 w-7 h-7 grid place-content-center text-xl rounded-full">
				{num + 1}
			</span>

			<h2>{name}</h2>
			<h2>{number}</h2>

			<button
				onClick={() => deleteTodo(id)}
				className="bg-red-500 px-3 py-2 rounded-lg text-white active:bg-green-700"
			>
				Delete Contact
			</button>
		</li>
	);
};

export default ListItem;
