import React from "react";

const SpecialButton = (props) => {
  return (
    <>
      <button className="btn btn-special">{props.character}</button>
    </>
  );
};

export default SpecialButton
