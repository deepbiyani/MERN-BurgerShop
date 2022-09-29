import React from 'react';
import "../../styles/menu.scss";
import MenuCard from './MenuCard';

function addToCartHandler (itemNumber) {
    alert(itemNumber);
}

function Menu() {
  return (
    <section id="menu">
        <h1>Menu</h1>
        <div>
       <MenuCard
          itemNum={1}
          burgerSrc="https://raw.githubusercontent.com/meabhisingh/mbaburgerwalaUI/master/src/assets/burger1.png"
          price={200}
          title="Cheese Burger"
          handler={addToCartHandler}
          delay={0.1}
        />
        <MenuCard
          itemNum={2}
          burgerSrc="https://raw.githubusercontent.com/meabhisingh/mbaburgerwalaUI/master/src/assets/burger2.png"
          price={500}
          title="Veg Cheese Burger"
          delay={0.5}
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={3}
          burgerSrc="https://raw.githubusercontent.com/meabhisingh/mbaburgerwalaUI/master/src/assets/burger3.png"
          price={1800}
          title="Cheese Burger with French Fries"
          delay={0.8}
          handler={addToCartHandler}
        />
        </div>
    </section>
  )
}

export default Menu