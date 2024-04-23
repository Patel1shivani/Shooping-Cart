import React, { useEffect, useState } from 'react';
import './Home.css';
import { add } from '../Redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Statuses, fetchproduct } from '../Redux/productSlice';


const Home = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    dispatch(fetchproduct());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(add(product));
  };

  const filtereProducts = products.filter((product) => {
    const passesCategory = category === '' || product.category === category;
    const passesMinPrice = minPrice === '' || product.price >= parseFloat(minPrice);
    const passesMaxPrice = maxPrice === '' || product.price <= parseFloat(maxPrice);
    return passesCategory && passesMinPrice && passesMaxPrice;
  });

  if (status === Statuses.Loading) {
    return <h2 style={{ fontWeight: 'bolder' }}>Loading...</h2>;
  }

  return (
    <div className='App3'>
      <div className="filters">
       <h1 className='head'>Category:-</h1>
        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="men's clothing">Man's wear</option>
          <option value="women's clothing">Women's clothing</option>
          <option value="jewelery">jewelery</option>
          <option value="women's clothing">Women's clothing</option>
        </select>
<div className='min-max'>
        <h1>Min Price:</h1>
        <input type="number" id="min" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
       <h2>Max Price:</h2>
        <input type="number" id="max" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
      </div>
      </div>
{/* </div> */}
      <div className="App">
        {filtereProducts.map((product) => (
          <div className='App1' key={product.id}>
            <img src={product.image} alt='img' />
            <h4>Title:-{product.title}</h4>
            <h3>Category:-{product.category}</h3>
            <h5>Price:-{product.price}</h5>
            <button id='btn' onClick={() => handleAddToCart(product)}>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;

