import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/action';

const ProductsCard = ({ img, rating, title, price }) => {
    // Destructure the props directly in the function parameter

    const dispatch = useDispatch();

    // Handle adding the product to the cart
    const handleAddToCart = () => {
        const product = { img, rating, title, price };
        dispatch(addToCart(product));
    };

    return (
        <div className="product_card">
            <figure>
                <img src={img} alt="item-img" />
            </figure>
            <strong className="rating">{rating}</strong>
            <h4 className="title">{title}</h4>
            <h3 className="price">tk. {price.toLocaleString()}</h3>
            <button
                type="button"
                className="btn"
                onClick={handleAddToCart}
            >
                Add to cart
            </button>
        </div>
    );
};

export default ProductsCard;
