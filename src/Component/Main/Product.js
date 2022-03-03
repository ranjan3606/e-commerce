import React, { useState, useEffect } from 'react';
import HeaderSlider from '../HeaderSlider/HeaderSlider';
import './Product.css';


function Product() {
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect((product) => {
        async function fetchData() {
            setIsLoading(true)
            const productsData = await fetch('https://fakestoreapi.com/products')
                .then((response) => response.json())
            setProduct(productsData)
            setIsLoading(false)
        }
        fetchData(product)
    }, []);

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
                        <div className='mt-5'>
                            <HeaderSlider />
                        </div>
                        <div className='container-fluid mt-5'>
                            <div className="row justify-content-center product">
                                {
                                    product.map((data) => {
                                        const { id, title, image, price, rating } = data;
                                        return (
                                            <div className="card cards m-2" style={{ width: '18rem' }} key={id}>
                                                <img src={image} className="img-fluid img p-4" alt="..." />
                                                <div className="card-body text-start">
                                                    <h6 className="card-title">{title}</h6>
                                                    <div className='d-flex price-rating'>
                                                        <h5 className="card-text price">₹ {price}</h5>
                                                        <p className="card-text rating">Rating. {rating.rate}</p>
                                                    </div>
                                                    <button className='btn mr-auto'>Buy Now</button>
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