import { Link, NavLink } from "react-router";

export default function MainNav() {
    return (
        <nav className="d-flex justify-content-start p-4 header-nav">
            <NavLink className="p-2" to="/">Home Page</NavLink>
            <NavLink className="p-2" to="/chi-siamo">Chi Siamo</NavLink>
            <NavLink className="p-2" to="/prodotti">Prodotti</NavLink>
        </nav>
    );
}

