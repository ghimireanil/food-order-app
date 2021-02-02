import React from "react";

export function Image(props) {
  const { image } = props;

  return (
    <>
      <img style={{ width: "95%", height: "450px" }} src={image} />
    </>
  );
}
