export default function HeaderNav() {
    return(
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="nav navbar-nav">
                <a className="nav-item nav-link active" href="/" aria-current="page">HomePage </a>
                <a className="nav-item nav-link" href="/chi-siamo">Chi Siamo</a>
                <a className="nav-item nav-link" href="/prodotti">Prodotti</a>
            </div>
        </nav>
    )
}