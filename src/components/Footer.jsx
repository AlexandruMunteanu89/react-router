import { NavLink } from 'react-router-dom';
export default function Footer() {


    return(
                <div className="container">
                    <div className=" row row-cols-1 row-cols-md-3">
                        <div className="col">
                            <h5>Our Company</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum qui repellat architecto !</p>
                        </div>
                        <div className="col">
                            <h5>Quick links</h5>
                            <ul className="list-unstyled">
                                <li><NavLink to="/" className="text-decoration-none">Homepage</NavLink></li>
                                <li><NavLink to="/chi-siamo" className="text-decoration-none">Chi Siamo</NavLink></li>
                                <li><NavLink to="/prodotti" className="text-decoration-none">Prodotti</NavLink></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h5>Legal stuff</h5>
                            <ul className="list-unstyled">
                                <li><a href="">Cookies</a></li>
                                <li><a href="">Privacy Policy</a></li>
                                <li><a href="">Terms of Service</a></li>
                                <li><a href="">Contacts</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
    )
}
