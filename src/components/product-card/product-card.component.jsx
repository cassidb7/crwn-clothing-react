// import './product-item.styles.scss'
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
  const {id, title, price } = product
  return(
    <div className="col mb-5">
      <div className="card h-100">
        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{title}</h5>
            ${price}
          </div>
        </div>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            < Link className="btn btn-outline-dark mt-auto" to={`/products/${id}`}>View options</Link>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default ProductCard;