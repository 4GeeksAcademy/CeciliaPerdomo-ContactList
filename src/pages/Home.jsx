import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { fetchContacts } from "../store.js";
import { Card } from "../components/Card.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	// Cargar los contactos al montar el componente
	useEffect(() => {
		fetchContacts(dispatch);
	}, []);

	return (
		<div className="text-center mt-5">
			<h1>Mis contactos</h1>
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
						/>
					))}
				</div>
			) : (
				<p>No existen contactos aún...</p>
			)}

			<hr />
		</div>
	);
}; 