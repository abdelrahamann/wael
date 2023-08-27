import React from 'react'
import { Link } from 'react-router-dom';


const Details = ({product}) => {
  return (
    <div className="container text-center">
    <div className="row justify-content-center">
        <div className="col-md-6">
            <div className="card">
                <img src={product.thumbnail} alt="" className="card-img-top" />
                <div className="card-body">
                <h3 className="card-title">Name: {product.title}</h3>
                <p className="card-text">Description: {product.description}</p>
                <p className="card-text">Discount Percentage: {product.discountPercentage} %</p>
                <p className="card-price">{product.price} EGP</p>
                    <Link to="" className="btn">Add to cart</Link>
                </div>
            </div>
        </div>
    </div>
</div>
);

}

export default Details