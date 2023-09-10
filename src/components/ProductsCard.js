import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/action";

const ProductsCard = ({ item }) => {
  console.log(item);
  const { img, rating, title, price } = item;

  const dispatch = useDispatch();

  return (
    <>
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
          onClick={() => dispatch(addToCart({ ...item }))}
        >
          Add to cart
        </button>
      </div>
    </>
  );
};

export default ProductsCard;
