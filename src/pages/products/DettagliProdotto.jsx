
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DettagliProdotto() {
    const { id } = useParams();
    const api_url = `https://fakestoreapi.com/products/${id}`;
    const [product, setProduct] = useState();
    const navigate = useNavigate();
    const [page, setPage] = useState({id});

    useEffect(()=>{
        fetch(api_url)
        .then(res => res.json())
        .then(data => { console.log(data)
                        setProduct(data)})
        .catch(err => {navigate("/prodotti")})
    }, [api_url])

  return (
    <div className="container">
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