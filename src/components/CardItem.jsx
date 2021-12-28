import React from "react";
import { Link } from "react-router-dom";
import "./CardItem.css";

const CardItem = (props) => {
  return (
    <li>
      <Link className="card__item__link" to={props.path}>
        <figure className="card__item__wrap">
          <img
            src={props.src}
            alt="Travel/Adventures Photos"
            className="card__item__img"
          />
          <div className="img-desc">{props.label}</div>
        </figure>
        <div className="card__item__info">
          <h5>{props.content}</h5>
        </div>
      </Link>
    </li>
  );
};

export default CardItem;
