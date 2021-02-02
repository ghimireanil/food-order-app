import React from "react";
import style from "./RestaurantDetail.module.css";

export function MenuList(props) {
  const { foodType, foodName, foodPrice } = props;

  return (
    <>
      <div className={style.title}>
        <strong> Menu List </strong>
      </div>

      <div>
        <div className={style.menuList}>
          <div className={style.getMenuList}>{foodType}</div>
          <div className={style.getMenuList}>{foodName}</div>
          <div className={style.getMenuList}>{foodPrice}</div>
        </div>
      </div>
    </>
  );
}
