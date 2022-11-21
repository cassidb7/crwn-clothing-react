import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import ProductShowView from './../../components/product-show-view/product-show-view.component'
const ProductShow = () =>  {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [product, setProduct] = useState([])
  const params = useParams()

  useEffect(() => {
    fetch(`http://localhost:3001/api/v1/products/${params.id}`)
        .then(res => res.json())
        .then(
            (data) => {
                setProduct(data);
                setIsLoaded(true);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
        return <div>Loading...</div>;
    }  

  return(
    < ProductShowView product={product} />
    );
};

export default ProductShow;