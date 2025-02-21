import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { fetchContacts } from "../store.js";
import { Card } from "../components/Card.jsx";
import { ModalDelete } from "../components/ModalDelete.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const [showModalDelete, setShowModalDelete] = useState({
		showModal: false,
		id: undefined,
		name: undefined
	});

	// Cargar los contactos al montar el componente
	useEffect(() => {
		fetchContacts(dispatch);
	}, []);

	return (
		<div className="text-center mt-5">
			<h1>👥 Mis contactos</h1>
			<hr />

			{store?.contacts?.length > 0 ? (
				<div className="d-flex flex-column align-items-center">
					{store.contacts.map((contact) => (
						<Card
							key={contact.id}
							id={contact.id}
							name={contact.name}
							address={contact.address}
							phone={contact.phone}
							email={contact.email}
							onDelete={() => setShowModalDelete({ showModal: true, id: contact.id, name: contact.name })}
						/>
					))}
				</div>
			) : (
				<p>No existen contactos aún...</p>
			)}

			<hr />

			<ModalDelete
				id={showModalDelete.id}
				name={showModalDelete.name}
				show={showModalDelete.showModal}
				onClose={() => setShowModalDelete({ showModal: false })}
			/>
		</div>
	);
}; 