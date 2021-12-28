import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards-container">
      <ul>
        <CardItem
          content="Get to Travel to places you've dreamt of."
          src="images/adv-1.jpg"
          label="Nature"
          path="/services"
        />
        <CardItem
          content="Get to cross the Amazing Bridge in the Amazon."
          src="images/adv-3.jpg"
          label="Adventures"
          path="/services"
        />
        <CardItem
          content="Visit Great residence houses in Brazil."
          src="images/adv-2.jpg"
          label="Luxury"
          path="/services"
        />
      </ul>
    </div>
  );
};

export default Cards;
