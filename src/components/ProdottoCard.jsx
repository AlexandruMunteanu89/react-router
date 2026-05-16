
export default function ProdottoCard({prodotto}) {
    const {title, image, price, id } = prodotto;

    return (
        <div className="col-12 col-sm-6 col-md-4">
            <div className="card">
                <img src={prodotto.image} alt={prodotto.title} />
                <div className="card-body">
                    <h3>{prodotto.title}</h3>
                    <p>Price: {prodotto.price}</p>
                </div>
            </div>
        </div>
    )
}