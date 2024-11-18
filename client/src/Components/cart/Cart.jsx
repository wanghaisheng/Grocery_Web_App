import React from 'react'
import './cart.css'
import Footer from '../footer/Footer'
import {food_list } from '../../assests/assets'

const Cart = ({ foodlist, itemCount,setItemCount }) => {

  const handleRemove = (itemId) => {
    setItemCount(prevCounts => {
        // Copy the previous state
        let updatedCounts = { ...prevCounts };

        // Update the count for the specified item
        updatedCounts[itemId] = Math.max(0, (prevCounts[itemId] || 0) - 1);

        // Check if the count for the item is zero, then delete the property
        if (updatedCounts[itemId] === 0) {
            delete updatedCounts[itemId];
        }

        return updatedCounts;
    });

    console.log(itemCount);
};

  const arr = []

  return (
    <>
    <div className='cart'>
      <div className='table-heading'>
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      {
        <div className='cart-items'>
          {Object.keys(itemCount).length > 0 ?
            food_list.map((item, index) => {
              console.log(Object.keys(itemCount).length)
              if (itemCount[index + 1] > 0) {
                return (
                  < div key={index} className='cart-item'>
                    <img src={item.image} alt="item.img" />
                    <h1 className='cart-item-name'>{item.name}</h1>
                    <p className='cart-item-price'>{item.price}</p>
                    <p className='cart-item-quantity'>{itemCount[index + 1]}</p>
                    <p className='cart-item-total'>{(itemCount[index + 1]) * (item.price)}</p>
                    <p onClick={()=>handleRemove(item._id)} className='cross'>X</p>
                    <div className='arr'>
                      {
                        arr.push((itemCount[index + 1]) * (item.price))
                      }
                    </div>
                  </div>
                )
              }
            }
            )
            : <p className='no-items-cart'>there is no items in the cart</p>
          }

        </div>
      }


      <div className='cart-total-promos'>
        <div className='cart-total'>
          <h6>Cart Totals</h6>
          <div className='cart-subtotal'>
            <div className='total-info'>
              <p>Subtotal</p>
              <p>{arr.reduce((curr, total) => { return total = curr + total }, 0)}</p>
            </div>

            <div className='total-info'>
              <p>Delivery Fee</p>
              <p>{arr.length > 0 ? 48.5 : 0}</p>
            </div>

            <div className='total-info' style={{ borderBottom: 'none', fontWeight: '600', fontSize: '15px' }}>
              <p>Total</p>
              {arr.reduce((curr, total) => { return total = curr + total }, arr.length > 0 ? 48.5 : 0)}
            </div>
          </div>
          <div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
        </div>
        <div className='cart-promos'>
          <p>If you have a promo code,Enter it here</p>
          <div className='promo-input'>
            <input type="text" id='promo-code' placeholder='promo code' />
            <button>Submit</button>
          </div>
        </div>

      </div>





    </div>
     <Footer className='cart-footer' />
     </>
  )

 
}

export default Cart


