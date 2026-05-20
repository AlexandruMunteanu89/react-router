import { Link, NavLink } from "react-router";

export default function MainNav() {
    return (
        <nav>
            <ul className="list-unstyled d-flex justify-content-end p-4 header-nav">
                <li className="nav-item d-flex">
                    <NavLink className='nav-link p-2' to="/">Home Page</NavLink>
                    <NavLink className='nav-link p-2' to="/chi-siamo">Chi Siamo</NavLink>
                    <NavLink className='nav-link p-2' to="/prodotti">Prodotti</NavLink>
                </li>
            </ul>
        </nav>
    );
}

