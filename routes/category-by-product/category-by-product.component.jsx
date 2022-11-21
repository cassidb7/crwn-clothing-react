import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import CategoryProductList from '../../components/category-product-list/category-product-list.component'

const CategoryByProduct = () =>  {
  const params = useParams()
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/api/v1/categories/${params.id}/all_products`)
    .then(response => response.json())
    .then(
      (data) => {
        setCategory(data);
        setProducts(data.products);
      }
    );
  }, [])

  return (
    < CategoryProductList category={category} products={products} />
  );
};

export default CategoryByProduct;