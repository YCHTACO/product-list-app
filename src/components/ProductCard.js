import {Link} from "react-router-dom"

const ProductCard =({product}) => {
    const imgURL = `https://picsum.photos/id/${product.id}/600/400`;
    return (
        <div className="card mb-3">
            <img src={imgURL} alt={product.name} className="card-img-top" />
            <div className="card-body">
                <h5>{product.name}</h5>
                <p>$ {product.price}</p>
                <Link to={`/product/${product.id}`}className="btn btn-info btn-sm">
                    Show details
                </Link>
             </div>
        </div>
    )
}

export default ProductCard;