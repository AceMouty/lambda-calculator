import React, {useState} from "react";
import NumberButton from "./NumberButton"
import "../../../App.css";
import data from "../../../data";
//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {
	// STEP 2 - add the imported data to state
	const [numbers, setNumber] = useState(data.numbers)
  return (
    <div className="number-container">
      {numbers.map(number => <NumberButton key={number} number={number}/>)}
    </div>
  );
};


export default Numbers