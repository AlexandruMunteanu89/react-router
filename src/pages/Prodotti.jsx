import { useEffect, useState } from "react"
import ProdottoCard from "./../components/ProdottoCard"
import { Link } from "react-router-dom";

export default function Prodotti() {
    const api_url = 'https://fakestoreapi.com/products';
    const [products, setProducts] = useState([]);

    function fetchProducts(url){
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchProducts(api_url);
    }, [])

    return(
        <>
         <div className="p-5 mb-4 bg-light">

         </div>
         <div className="container">
            <div className="row row-cols-1 row-cols-md3 row-cols-lg-3 g-4">
                {products.map(product => (
                    <div className="col-6" key={product.id}>
                            <article><ProdottoCard prodotto={product} /></article>
                    </div>
                ))}
            </div>
         </div>  
            
            <hr />
        </>
    )
}