import React from 'react';
import { Link } from 'react-router-dom';
import burger1 from '../../assets/burger1.png'
import burger2 from '../../assets/burger2.png'
import burger3 from '../../assets/burger3.png'

const Cart = () => {

    const increment = ()=>{};
    const decrement = ()=>{};

    const CartItem = ({value,title,img,increment,decrement})=>(
        <div className="cartItem">

            <div>
                <h4>{title}</h4>
                <img src={img} alt="item" />
            </div>

            <div>
                <button onClick={decrement} >-</button>
                <input type="number" readOnly value={value}  />
                <button onClick={increment} >+</button>
            </div>



        </div>
    )


  return (
    <section className='cart'>
        <main>
            <CartItem value={0} title={'Veg Burger'} img={burger1} increment={1} decrement={1} />
            <CartItem value={0} title={'Chicken Cheese Burger'} img={burger2} increment={2} decrement={2} />
            <CartItem value={0} title={'Fries & Burger'} img={burger3} increment={3} decrement={3} />

            <article>
                <div>
                    <h4>Sub Total</h4>
                    <p>₹{650}</p>
                </div>
                <div>
                    <h4>GST</h4>
                    <p>₹{650*0.18}</p>
                </div>
                <div>
                    <h4>Delivery Charges</h4>
                    <p>₹{120}</p>
                </div>
                <div>
                    <h4>Total Fare</h4>
                    <p>₹{850}</p>
                </div>

                <Link to='/shipping' >Checkout</Link>

            </article>
        </main>
    </section>
  )
}

export default Cart;