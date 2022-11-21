import './category-item.styles.scss'

import { Link } from 'react-router-dom';

const CategoryItem = ({category}) => {
  const {id, image_url, title } = category
  return(
    <div className='category-container'>
    <div className='background-image' style={{backgroundImage: `url(${image_url})`}}/>
    <div className='category-body-container'>
      <h2>{title}</h2>
      <p>< Link to={`/products-by-categories/${id}`}>Shop Now</Link></p>
    </div>
  </div>
  )
}

export default CategoryItem;