
export default function ProdottoCard({prodotto}) {
    const {title, image, price, id } = prodotto;

    return (
        <div className="col-12">
            <div className="card">
                <img className="imgProdotto" src={prodotto.image} alt={prodotto.title} />
                <div className="card-body">
                    <h3>{prodotto.title}</h3>
                    <p className="price">Price: {prodotto.price}</p>
                </div>
            </div>
        </div>
    )
}