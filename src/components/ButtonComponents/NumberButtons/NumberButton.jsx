import React from "react";
import "../../../App.css";

const NumberButton = (props) => {
		return (
			<>
				<button className="btn btn-dark">{props.number}</button>
			</>
		)

};


export default NumberButton