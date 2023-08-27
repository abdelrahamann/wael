import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductList.css'

import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getproducts } from '../Auth/ProductAuth';
import Details from '../Details/Details';


const Products = () => {
    const [productsData, setProductsData] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null); 

    const getData = async () => {
        let data = await getproducts();
        const { products } = data;
        setProductsData(products);
    }

    useEffect(() => {
        getData();
    }, []);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    }

    return (
        <div className="container text-center">
            {selectedProduct ? (
                <Details product={selectedProduct} />
            ) : (
                <div className="row equal-height justify-content-center">
                    {productsData.map((productData) => (
                        <div className="col-md-4 col-sm-6 mb-5" key={productData.id}>
                            <div className="card animated-border" onClick={() => handleProductClick(productData)}>
                                <img src={productData.thumbnail} alt="" className="card-img-top" />
                                <div className="card-body justify-content-center">
                                    <h3 className="card-title">{productData.title}</h3>
                                    <p className="card-price">{productData.price} EGP</p>
                                </div>
                                <div className="card-footer">
                                    <Link to="#" className="btn justify-content-center">Product Details</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div> 
    );
}
export default Products;
