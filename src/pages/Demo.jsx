import { useState } from "react";
// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { createContact } from "../store";

export const Demo = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()

  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [mail, setMail] = useState("")


  const handleCreateContact = (e) => {
    e.preventDefault()

    const newContact = {
      "name": name,
      "phone": phone,
      "email": mail,
      "address": address
    }

    // console.log(newContact)
    createContact(dispatch, newContact);
    setName("")
    setAddress("")
    setPhone("")
    setMail("")
  }

  return (
    <div className="container mt-5 mb-5 p-5" style={{border: "1px solid black", borderRadius: "15px"}}>
      <h2 className="text-center">Agregar nuevo contacto</h2>
      <hr />

      <div className="input-group mb-3">
        <span className="input-group-text" id="name">Nombre y Apellido</span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Ingresa tu nombre y apellido"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="email">Correo electrónico</span>
        <input
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          placeholder="Ingresa tu correo electrónico"
          type="email"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default" />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="address">Dirección</span>
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Ingresa tu dirección"
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default" />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Teléfono</span>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
           placeholder="Ingresa tu teléfono"
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default" />
      </div>

      <div className="mt-5">
        {/* me-3 da margen a la derecha del primer botón */}
        <button
          className="btn btn-outline-success mb-3 me-3"
          onClick={(e) => handleCreateContact(e)}
        >
          Agregar a mis contactos
        </button>

        <Link to="/">
          <button className="btn btn-outline-success mb-3">Regresar 🏠 a mi agenda</button>
        </Link>
      </div>
    </div>
  );
};
