import React, { useState } from 'react';
import './cart.css';
import Footer from '../footer/Footer';
import { food_list } from '../../assests/assets';
import { useNavigate } from "react-router-dom";

const Cart = ({ foodlist, itemCount, setItemCount }) => {
  const [discount, setDiscount] = useState(0); // State for tracking discount
  const navigate = useNavigate(); // For navigation

  const handleRemove = (itemId) => {
    setItemCount((prevCounts) => {
      let updatedCounts = { ...prevCounts };
      updatedCounts[itemId] = Math.max(0, (prevCounts[itemId] || 0) - 1);

      if (updatedCounts[itemId] === 0) {
        delete updatedCounts[itemId];
      }

      return updatedCounts;
    });
  };

  const arr = [];

  const applyPromoCode = () => {
    const promoInput = document.getElementById('promo-code').value.trim();
    const subtotal = arr.reduce((curr, total) => curr + total, 0);

    if (promoInput === 'Tomato50') {
      const discountAmount = (subtotal * 50) / 100; // 50% discount
      setDiscount(discountAmount);
    } else {
      setDiscount(0);
      alert('Invalid promo code. Please try again.');
    }
  };

  const proceedToCheckout = () => {
    navigate('/order-successful'); // Redirect to Order Successful page
    setTimeout(() => {
      navigate('/cart'); // Return to Cart page after 3000ms
    }, 2000);
  };

  return (
    <>
      <div className="cart">
        <div className="table-heading">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <div className="cart-items">
          {Object.keys(itemCount).length > 0 ? (
            food_list.map((item, index) => {
              if (itemCount[index + 1] > 0) {
                return (
                  <div key={index} className="cart-item">
                    <img src={item.image} alt="item.img" />
                    <h1 className="cart-item-name">{item.name}</h1>
                    <p className="cart-item-price">{item.price}</p>
                    <p className="cart-item-quantity">{itemCount[index + 1]}</p>
                    <p className="cart-item-total">
                      {itemCount[index + 1] * item.price}
                    </p>
                    <p
                      onClick={() => handleRemove(item._id)}
                      className="cross"
                    >
                      X
                    </p>
                    <div className="arr">
                      {arr.push(itemCount[index + 1] * item.price)}
                    </div>
                  </div>
                );
              }
            })
          ) : (
            <p className="no-items-cart">There are no items in the cart</p>
          )}
        </div>

        <div className="cart-total-promos">
          <div className="cart-total">
            <h6>Cart Totals</h6>
            <div className="cart-subtotal">
              <div className="total-info">
                <p>Subtotal</p>
                <p>{arr.reduce((curr, total) => curr + total, 0)}</p>
              </div>

              <div className="total-info">
                <p>Delivery Fee</p>
                <p>{arr.length > 0 ? 48.5 : 0}</p>
              </div>

              {discount > 0 && (
                <div className="total-info">
                  <p>Offer Price</p>
                  <p>- {discount.toFixed(2)}</p>
                </div>
              )}

              <div
                className="total-info"
                style={{ borderBottom: 'none', fontWeight: '600', fontSize: '15px' }}
              >
                <p>Total</p>
                <p>
                  {arr.reduce((curr, total) => curr + total, 0) - discount + (arr.length > 0 ? 48.5 : 0)}
                </p>
              </div>
            </div>
            <div>
              <button onClick={proceedToCheckout}>PROCEED TO CHECKOUT</button>
            </div>
          </div>

          <div className="cart-promos">
            <p>If you have a promo code, enter it here:</p>
            <div className="promo-input">
              <input type="text" id="promo-code" placeholder="Promo code" />
              <button onClick={applyPromoCode}>Submit</button>
            </div>
          </div>
        </div>
      </div>
      <Footer className="cart-footer" />
    </>
  );
};

export default Cart;
