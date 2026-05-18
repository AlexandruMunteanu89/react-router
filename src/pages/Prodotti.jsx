import { useEffect, useState } from "react"
import ProdottoCard from "./../components/ProdottoCard"

export default function Prodotti() {

    const [prodottiData, setProdottiData] = useState([])

    function fetchData() {
        const url= 'https://fakestoreapi.com/products';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProdottiData(data);
                console.log(data);
            })
    }
    useEffect(() => {
        fetchData()
    }, [])

    return(
        <>
            <section className="container">
                <h1>
                    Lista Prodotti
                </h1>
                
                <div className="row wrap">
                    {prodottiData.map(prodotto => (
                        <article className="col-6" key={prodotto.id}><ProdottoCard prodotto={prodotto} /></article>
                    ))}
                </div>
            </section>
            <hr />
        </>
    )
}