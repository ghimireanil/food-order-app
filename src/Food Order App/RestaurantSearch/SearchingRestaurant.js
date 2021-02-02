import React from "react";
import style from "./SearchingRestaurant.module.css";

export function SearchingRestaurant(props) {
  const { name, image, address1, address2, review1, review2 } = props;

  return (
    <div className={style.restro}>
      <img className={style.image} src={image} alt="" />
      <div className={style.text}>
        <strong> {name}</strong>
        <p>
          {address1}, {address2}
        </p>
      </div>
      <div className={style.review}>
        <p
          style={{
            fontSize: "20px",
            backgroundColor: "chocolate",
            backgroundPosition: "unset",
          }}
        >
          {review1.toFixed(2)}
        </p>
        <p>{review2} Reviews</p>
      </div>
    </div>
  );
}
