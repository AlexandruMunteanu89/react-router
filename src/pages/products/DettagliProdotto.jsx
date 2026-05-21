
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DettagliProdotto() {
    const { id } = useParams();
    const api_url = `https://fakestoreapi.com/products/${id}`;
    const [product, setProduct] = useState();
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    //const api_url = `https://exemplu.com/prodotti?page=${page}`;

    useEffect(()=>{
        fetch(api_url)
        .then(res => res.json())
        .then(data => { console.log(data)
                        setProduct(data)})
        .catch(err => {navigate("/prodotti")})
    }, [api_url])

    //la funzione per cambiare la pagina
    function prossimaPagina() {
    setPage(page + 1);
    }
    function paginaPrecedente() {
    if (page > 1) {
      setPage(page - 1);
        }
    }

  return (
    <div className="container">
        <section>
          {page > 1 ? (<button className="btn btn-warning" onClick={paginaPrecedente}>Pagina Precedente</button>) : ('')}
          <button className="btn btn-warning m-2" onClick={prossimaPagina}>Prossima Pagina</button>
        </section>
        <div className="dettaglio-card p-2 my-4">
            {product ? (
                <div>
                    <img className="imgProdotto" src={product.image} alt={product.title} />
                    <h5 className="card-title py-4">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">Category: {product.category}</p>
                    <p>Rate: {product.rating.rate}</p>
                    <p>Count: {product.rating.count}</p>
                    <p className="price">Price: {product.price}</p>
                </div>
            ) :
            (
                <p>Loading product...</p>
            )}
        </div>
    </div>                
  )
}

export default DettagliProdotto