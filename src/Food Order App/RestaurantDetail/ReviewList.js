import React from 'react';
import style from './RestaurantDetail.module.css';

export function ReviewList(props) {
  const { reviewComment, reviewUser, reviewAverage } = props;

  return (
    <>
      <div className={style.title}>
        <strong> Reviews </strong>

        <div className={style.getRev}>
          <div className={style.getReviews}>{reviewUser}</div>
          <div
            style={{ color: 'chocolate', fontWeight: 'bolder' }}
            className={style.getReviews}
          >
            {reviewAverage}
          </div>
          <div className={style.getReviews}> {reviewComment}</div>
        </div>
      </div>
    </>
  );
}
