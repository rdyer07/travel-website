import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            {/* now we need to pass props so our cards can show. We pass them into the CardItems component */}
            <CardItem
              src="images/img-2.jpg"
              text="Travel through the islands of Bali on a private cruise"
              label="Luxury"
              path="/services"
            />
            <CardItem
              src="images/img-3.jpg"
              text="Set sail in the Atlantic Ocean visiting Unchartered Waters"
              label="Mystery"
              path="/products"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Experience football on top of the Himalayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Explore"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
      {/* card container wraps all the li's with the ul and card wrapper container */}
    </div>
  );
}

export default Cards;
