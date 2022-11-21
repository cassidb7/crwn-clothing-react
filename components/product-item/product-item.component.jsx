import './product-item.styles.scss'
import { Link } from 'react-router-dom';

const ProductItem = ({product}) => {
  const {id, title, description, price } = product
  return(
    <tr>
      <th className='row-container' key={id}></th>
      <td>{title}</td>
      <td>{description}</td>
      <td>{price}</td>
      <td>
        <button className='btn btn-sm btn-primary'>
        < Link to={`/products/${id}`}>Show</Link>
        </button>
      </td>
    </tr>
  )
}

export default ProductItem;