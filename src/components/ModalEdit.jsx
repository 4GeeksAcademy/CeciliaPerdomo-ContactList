import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

import { updateContact } from "../store.js";

export const ModalEdit = ({ id, contact }) => {
    const { store, dispatch } = useGlobalReducer()
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [mail, setMail] = useState("")

    const updateInfoContact = (e) => {
        e.preventDefault()
        const contactData = {
            "name": name,
            "phone": phone,
            "email": mail,
            "address": address
        }
        updateContact(dispatch, id, contactData)
    }

    const infoContacto = () => {
        setName(contact?.name)
        setAddress(contact?.address)
        setPhone(contact?.phone)
        setMail(contact?.mail)
    }

    useEffect(() => {
        infoContacto()
    }, [])


    return (
        //  {/* Modal de editar contacto */}
        <div className="modal fade" id="exampleModalEdit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Editar contacto</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
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
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No actualizar!!</button>
                        <button
                            onClick={(e) => updateInfoContact(e)}
                            type="button"
                            className="btn btn-success"
                            data-bs-dismiss="modal"
                        >
                            Editar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}