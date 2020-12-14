import React from "react";
import { Link } from "react-router-dom";

function CardItem({ src, text, label, path }) {
  return (
    <div>
      <li className="cards__item">
        <Link className="cards__item__link" to={path}>
          <figure className="cards__item__pic-wrap" data-category={label}>
            <img src={src} alt="Travel Pic" className="cards__item__img" />
          </figure>
          {/* figure specifies self contained content e.g images/videos/ etc. It's position is independent of main flow and if removed will not affect main flow */}
          <div className="cards__item__info">
            <h5 className="cards__item__text">{text}</h5>
            {/* we passed props to Link (path), figure (label), img and h5 (text) syntax from Cards component. Using ES6 destructuring */}
          </div>
        </Link>
      </li>
    </div>
  );
}

export default CardItem;
