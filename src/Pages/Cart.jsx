import './Cart.css'
import { useSelector, useDispatch } from 'react-redux';
import { remove, incrementQuantity, decrementQuantity } from '../Redux/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart);

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  return (
    <div>
      <div className='cart-wrap'>
        {cartItems.map(item => (
          <ul className='cart-item' key={item.id}>
            <li><img src={item.image} alt={item.title} /></li>
            <li><h4>title:{item.title}</h4></li>
            <li><h4>price:{item.price}</h4></li>
              <button className='shivi1' onClick={() => handleIncrement(item.id)}>+</button>
              <li><h4>Quantity: {item.quantity}</h4></li>
              <button className='shivi' onClick={() => handleDecrement(item.id)}>-</button>
            <li><button onClick={() => handleRemove(item.id)}>Remove</button></li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Cart;
