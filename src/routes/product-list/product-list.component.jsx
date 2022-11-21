import { useState, useEffect } from 'react';

import Table from '../../components/table/table.component'
const ProductList = () =>  {

  const [searchField, setSearchField] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products)


  useEffect(() => {
    fetch('http://localhost:3001/api/v1/products')
    .then(response => response.json())
    .then((items) => setProducts(items)
    );
  }, [])

  useEffect(() => {
    const newFilteredProducts = products.filter(
      products => products.title.toLowerCase().includes(searchField)
    );

    setFilteredProducts(newFilteredProducts)
  }, [products, searchField])


  const onSearchChange  = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);  
  }


  return (
    < Table items={filteredProducts} />
  );
};

export default ProductList;