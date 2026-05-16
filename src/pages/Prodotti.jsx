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
            <h1>
                Lista Prodotti
            </h1>
            {prodottiData.map(prodotto => (
                <article key={prodotto.id}><ProdottoCard prodotto={prodotto} /></article>
            ))}
        </>
    )
}