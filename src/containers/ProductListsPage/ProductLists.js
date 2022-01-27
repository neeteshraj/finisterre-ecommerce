import React from 'react';
import Layout from '../../components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { getProductsBySlug } from "../../actions";
import './ProductLists.css';
import { generatePublicUrl } from '../../config/urlConfig';

const ProductLists = (props) => {

    const products = useSelector(state => state.product);

    const [priceRange, setPriceRange] = useState({
        under5k: 5000,
        under10k: 10000,
        under15k: 15000,
        under20k: 20000,
        under30k: 30000,
    });

    const dispatch = useDispatch();
    useEffect(() => {
        const { match } = props;
        dispatch(getProductsBySlug(match.params.slug));
    }, [])

    return (
        <Layout>
            {
                Object.keys(products.productsByPrice).map((key, index) => {
                    return (
                        <div className="card">
                            <div className="cardHeader">
                                <div>
                                    {props.match.params.slug} mobile under {priceRange[key]}.
                                </div>
                                <button> View All</button>
                            </div>
                            <div style={{display: 'flex'}}>
                            {
                                products.productsByPrice[key].map((products) => {
                                    return (
                                        <div className="productContainer">
                                            <div className="productImgContainer">
                                                <img src={generatePublicUrl(products.productPictures[0].img)} alt="" />
                                            </div>
                                            <div className="productInfo">
                                                <div style={{ margin: '5px 0' }}>{products.name}</div>
                                                <div>
                                                    <span>4.3</span>&nbsp;
                                                    <span>3491</span>
                                                </div>
                                                <div className="productPrice">{products.price}</div>
                                            </div>
                                        </div>
                                    )
                                }
                                )
                            }
                            </div>
                        </div>
                    );
                })
            }

        </Layout>
    );
};

export default ProductLists;
