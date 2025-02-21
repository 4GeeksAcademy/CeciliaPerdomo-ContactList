import { useState } from "react";
// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.

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
  }

  return (
    <div className="container mt-3">
      <h2 className="text-center">Agregar nuevo contacto</h2>
      <hr />

      <div className="input-group mb-3">
        <span className="input-group-text" id="name">Nombre y Apellido</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="email">Correo electrónico</span>
        <input type="email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="address">Dirección</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="inputGroup-sizing-default">Teléfono</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
      </div>

      <div>
        {/* me-3 da margen a la derecha del primer botón */}
        <button className="btn btn-outline-success mb-3 me-3">Agregar a mis contactos</button>

        <Link to="/">
          <button className="btn btn-outline-success mb-3">Regresar 🏠 a mi agenda</button>
        </Link>
      </div>
    </div>
  );
};
