export default function HomePage(){


    return (
        <>

            <header>
                <nav className="navbar navbar-expand navbar-light bg-light">
                    <div className="nav navbar-nav">
                        <a className="nav-item nav-link active" href="/" aria-current="page">HomePage </a>
                        <a className="nav-item nav-link" href="/chi-siamo">Chi Siamo</a>
                        <a className="nav-item nav-link" href="/prodotti">Prodotti</a>
                    </div>
                </nav>
                
            </header>
            <main>
                <div className="p-5 mb-4 bg-light rounded-3">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">Custom hero section</h1>
                        <p className="fs-4">
                            Using a series of utilities, you can create this highlighted hero
                            section. Check out the examples below for how you can remix and
                            restyle it to your liking.
                        </p>
                        <button className="btn btn-primary btn-lg" type="button">
                            Join us
                        </button>
                    </div>
                </div>
                
            </main>
            <footer className="bg-light py-5">
                <div className="container">
                    <div className=" row row-cols-1 row-cols-md-3">
                        <div className="col">
                            <h5>Our Company</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum qui repellat architecto !</p>
                        </div>
                        <div className="col">
                            <h5>Quick links</h5>
                            <ul className="list-unstyled">
                                <li><a href="">HomePage</a></li>
                                <li><a href="">Chi Siamo</a></li>
                                <li><a href="">Prodotti</a></li>
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
            </footer>



        </>
    )
}