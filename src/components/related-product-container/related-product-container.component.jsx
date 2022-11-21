import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ProductCard from '../product-card/product-card.component';

const RelatedProductContainer = () => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const params = useParams()

  useEffect(() => {
    fetch(`http://localhost:3001/api/v1/products/${params.id}/related`)
    .then(response => response.json())
    .then((items) => setRelatedProducts(items)
    );
  }, [])

  return(
    <section className="py-5 bg-light">
        <div className="container px-4 px-lg-5 mt-5">
            <h2 className="fw-bolder mb-4">Related products</h2>
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {relatedProducts.map((item) => (
                < ProductCard product={item} key={item.id} />
              ))
            }
            </div>
        </div>
    </section>
  )
}

export default RelatedProductContainer;