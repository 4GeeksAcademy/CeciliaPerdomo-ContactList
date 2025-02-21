import rigoImageUrl from "../assets/img/rigo-baby.jpg";

export const Card = ({ id, name, address, phone, email, onDelete, onEdit }) => {
    return (
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4 p-3">
                    <img src={rigoImageUrl} className="img-fluid rounded-start" alt={name} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h3 className="card-title text-start">{name}</h3>
                            <div>
                                {/* Editar */}
                                <button
                                    type="button"
                                    className="btn btn-outline-info me-2"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModalEdit"
                                    onClick={() => onEdit()}
                                >
                                    <i className="fa fa-pen"></i>
                                </button>

                                {/* Borrar */}
                                <button
                                    type="button"
                                    className="btn btn-outline-danger"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={() => onDelete()}
                                >
                                    <i className="fa fa-trash"></i>
                                </button>
                            </div>
                        </div>
                        <p className="card-text text-start">📍 Address: <strong>{address}</strong></p>
                        <p className="card-text text-start">📞 Phone: <strong>{phone}</strong></p>
                        <p className="card-text text-start">📩 Email: <strong>{email}</strong></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

