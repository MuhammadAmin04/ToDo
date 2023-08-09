import { useState, useRef } from "react";
import ListItem from "./components/UI/List/ListItem";
import { ToastContainer, toast } from "react-toastify";
import Modal from "./components/Modal/index";
import index from "./components/Modal/index";
import axios from "axios";

const App = () => {
	const [modal, setModal] = useState(false);
	const [contact, setContact] = useState([]);
	 
	function deleteTodo(id){
		const filtered = contact.filter((el) => {
			return id !== el.id
		})

		setContact(filtered);
	}

	return (
		<div className="container mx-auto">
			<ToastContainer />
			<div className="wrapper mx-auto mt-8 w-[800px] bg-green-200 p-2">
				<div className="contact">
					<h2 className="text-center font-semibold text-green-600 my-3">
						Contacts
					</h2>
					<div className="contact-header p-2 bg-cyan-100 flex gap-x-2">
						<button
							onClick={() => {
								setModal(true);
							}}
							className="bg-green-500 px-3 py-2 rounded-lg  text-white active:bg-green-700"
						>
							Add new Contact
						</button>
					</div>

					{modal ? (
						<Modal
							setModal={setModal}
							contact={contact}
							setContact={setContact}
						/>
					) : (
						""
					)}
				</div>
				<div className="wrapper" >
					{contact.length
						? contact.map((item,index) => {
								return (
									<ListItem
										deleteTodo={deleteTodo}
										key={index}
										name={item.name}
										num={index}
										number={item.number}
										id={item.id}
									/>
								);
						  })
						: "Contact is Empty"}
				</div>
			</div>
		</div>
	);
};

export default App;
