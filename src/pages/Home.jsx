import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { fetchContacts } from "../store.js";
import { Card } from "../components/Card.jsx";
import { ModalDelete } from "../components/ModalDelete.jsx";
import { ModalEdit } from "../components/ModalEdit.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const [showModalDelete, setShowModalDelete] = useState({
		showModal: false,
		id: undefined,
		name: undefined
	});

	const [showModalEdit, setShowModalEdit] = useState({
		showModal: false,
		id: undefined,
		contact: undefined
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
							// Abre el modal para eliminar un contacto
							onDelete={() => setShowModalDelete({ showModal: true, id: contact.id, name: contact.name })}
							// Abre el modal para editar el contacto
							onEdit={() => setShowModalEdit({ showModal: true, id: contact.id, contact: contact })}
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

			<ModalEdit
				id={showModalEdit.id}
				contact={showModalEdit.contact}
				show={showModalEdit.showModal}
				onClose={() => setShowModalEdit({ showModal: false })}
			/>
		</div>
	);
}; 