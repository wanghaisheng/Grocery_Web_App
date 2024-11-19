import React from "react";
import "./OrderSuccessful.css";
import { useNavigate } from "react-router-dom";

const OrderSuccessful = () => {
  const navigate = useNavigate();

  const goBackToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="order-success-container">
      <div className="order-success-message">
        <h1>🎉 Order Successful! 🎉</h1>
        <p>Thank you for your purchase. Your order is on its way!</p>
      </div>
    </div>
  );
};

export default OrderSuccessful;
