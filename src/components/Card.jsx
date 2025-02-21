import rigoImageUrl from "../assets/img/rigo-baby.jpg";

export const Card = ({id, name, address, phone, email}) => {
    return (
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4 p-3">
                    <img src={rigoImageUrl} className="img-fluid rounded-start" alt={name} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h3 className="card-title text-start text-success">{name}</h3>
                        <p className="card-text text-start">📍 Address: <strong>{address}</strong></p>
                        <p className="card-text text-start">📞 Phone: <strong>{phone}</strong></p>
                        <p className="card-text text-start">📩 Email: <strong>{email}</strong></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

