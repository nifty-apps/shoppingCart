import { useDispatch } from 'react-redux';
import { incrItem, decrItem, removeItem } from '../redux/action';

const CartItem = ({ item }) => {
    const { img, price, quantity, title, id } = item
    const dispatch = useDispatch();
    return (
        <div className="cart_items" >
            <figure className="cart_items_img">
                <img src={img} alt="product-img" />
            </figure>

            <div className="cart_items_info">
                <h4>{title}</h4>
                <h3 className="price">tk. {price.toLocaleString()}</h3>
            </div>

            <div className="cart_items_quantity">
                <span
                    onClick={() => dispatch(decrItem(id))}
                >
                    &#8722;
                </span>
                <b>{quantity}</b>
                <span
                    onClick={() => dispatch(incrItem(id))}
                >
                    &#43;
                </span>
            </div>

            <div
                title="Remove Item"
                className="cart_items_delete"
                onClick={() => dispatch(removeItem(id))}
            >
                <span>&times;</span>
            </div>
        </div>
    )
}
export default CartItem