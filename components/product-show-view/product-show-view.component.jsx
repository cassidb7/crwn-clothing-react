import { Fragment } from 'react';
import RelatedProductContainer from '../related-product-container/related-product-container.component'

const ProductShowView = ({product}) => {
  return(
    <Fragment>
    <section className="py-2">
      <div className="container px-2 px-lg-3 my-0">
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-6">
            <img className="card-img-top mb-5 mb-md-0" src="https://dummyimage.com/600x700/dee2e6/6c757d.jpg" alt="dummy" />
          </div>
          <div className="col-md-6">
            <div className="small mb-1">SKU: BST-498</div>
              <h1 className="display-5 fw-bolder">{product.title}</h1>
              <div className="fs-5 mb-5">
              <span className="text-decoration-line-through">${product.price}</span>
              <span>${product.price}</span>
            </div>
            
            <p className="lead">{product.description}</p>
            <div className="d-flex">
              {/* <input className="form-control text-center me-3" id="inputQuantity" type="num" value="1" style="max-width: 3rem"> */}
              <button className="btn btn-outline-dark flex-shrink-0" type="button">
                <i className="bi-cart-fill me-1"></i>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    < RelatedProductContainer />
</ Fragment>
  )
}

export default ProductShowView;