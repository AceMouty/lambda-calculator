import React from "react";
import "../../../App.css";

const NumberButton = (props) => {
	if(props.numbner!== 0){
		return (
			<>
				<button className="btn btn-dark">{props.number}</button>
			</>
		);
	} else {
		return (
			<>
				<button className="btn-oval btn-dark">{props.number}</button>
			</>
		)
	}
};


export default NumberButton