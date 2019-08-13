import React from "react";

const SpecialButton = (props) => {
  return (
    <>
      <button className="btn special-btn">{props.character}</button>
    </>
  );
};

export default SpecialButton
