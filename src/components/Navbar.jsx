import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/" style={{textDecoration: "none"}}>
					<span className="navbar-brand mb-0 h1">📖 Agenda</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-outline-success">Agregar contactos</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};