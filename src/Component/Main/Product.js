import React, { useState, useEffect } from 'react';
import './Product.css';
import Navbar from '../Navbar/Navbar';


function Product() {
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            const productsData = await fetch('https://fakestoreapi.com/products')
                .then((response) => response.json())
            setProduct(productsData)
            setIsLoading(false)
        }
        fetchData(product)
    },[]);

    return (
        <>
            {
                isLoading ? (
                    <div className='loadingContainer container-fluid'>
                        <div className='load'>L</div>
                        <div className='load'>o</div>
                        <div className='load'>a</div>
                        <div className='load'>d</div>
                        <div className='load'>i</div>
                        <div className='load'>n</div>
                        <div className='load'>g</div>
                    </div>
                ) : (
                    <>
                        <Navbar />
                        <div className='container text-center mt-5 '>
                            <div className="row justify-content-center product">
                                {
                                    product.map((data) => {
                                        const { id, title, image, price, rating } = data;
                                        return (
                                            <div className="card m-2" style={{ width: '18rem' }} key={id}>
                                                <img src={image} className="img-fluid" alt="..." />
                                                <div className="card-body text-start">
                                                    <p className="card-title">{title}</p>
                                                    <div className='d-flex price-rating'>
                                                        <h5 className="card-text ">Rs. {price}</h5>
                                                        <p className="card-text text-primary">Rating. {rating.rate}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </>
                )
            }

        </>
    )
}

export default Product