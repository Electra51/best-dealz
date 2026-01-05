import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // const handleAddToCart = (product) => {
  //   console.log(product);
  //   const newCart = [...cart, product];
  //   setCart(newCart);
  // };
  // console.log("products....", products);

   // Product add করার function
  const handleAddToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    
    if (exists) {
      // Already exists, increase quantity
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      // New product, add with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Quantity increase
  const handleIncrease = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // Quantity decrease
  const handleDecrease = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  // Remove single item
  const handleRemove = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Clear entire cart
  const handleClearCart = () => {
    setCart([]);
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}></Product>
        ))}
      </div>
      <div className="cart-container">
        {/* <Cart cart={cart}></Cart> */}
          <Cart 
        cart={cart}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        onRemove={handleRemove}
        onClearCart={handleClearCart}
      />
      </div>
    </div>
  );
};

export default Shop;
