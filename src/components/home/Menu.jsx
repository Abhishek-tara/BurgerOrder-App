import React from 'react';
import MenuCard from './MenuCard';
import burger1 from '../../assets/burger1.png'
import burger2 from '../../assets/burger2.png'
import burger3 from '../../assets/burger3.png'


const Menu = () => {

  const addToCart = ()=>{

  };

  return (
    <section id='menu'>
        <h1>MENU</h1>
        <div>
          <MenuCard itemNum={1} burgerSrc={burger1} price={150} title={"Veg Burger"} handler={addToCart} delay={0.1} />
          <MenuCard itemNum={2} burgerSrc={burger2} price={250} title={"Chicken cheese Burger"} delay={0.5} handler={addToCart} />
          <MenuCard itemNum={3} burgerSrc={burger3} price={350} title={"French Fries & Burger"} delay={0.9} handler={addToCart} />
        </div>
    </section>
  )
}

export default Menu;