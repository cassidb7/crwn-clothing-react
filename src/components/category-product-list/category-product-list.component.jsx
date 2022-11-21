import Table from '../../components/table/table.component'
import { Link } from 'react-router-dom';
import './category-product-list.styles.scss'

const CategoryProductList = ({category, products}) => {

  return(
    <div className="col">
      <h1>Category Name: {category.title}</h1>
      < hr/>
      < Table items={products} />
    </div>
  )
}

export default CategoryProductList;