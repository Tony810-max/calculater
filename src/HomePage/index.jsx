import React, { useState } from "react";

import styles from "./HomePage.module.scss";
import classNames from "classnames";
import { Button } from "react-bootstrap";

export default function HomePage() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [currentOperation, setCurrentOperation] = useState(null);

  const handleSetNumber = (number) => {
    if (!currentOperation) {
      setNumber1((prev) => prev + number); // 123
    } else {
      setNumber2((prev) => prev + number); // 123 + 123
    }
  };

  // Set the operation (+, -, *, /)
  const handleSetOperation = (operation) => {
    if (!currentOperation) {
      setCurrentOperation(operation);
    } else {
      if (number2) {
        calculateResult();
      }
      setCurrentOperation(operation);
    }
  };

  // Calculate the result
  const calculateResult = () => {
    if (currentOperation && number2) { // 123 + 123
      const num1 = parseFloat(number1);
      const num2 = parseFloat(number2);
      let newResult = "";

      switch (currentOperation) {
        case "+":
          newResult = num1 + num2;
          break;
        case "-":
          newResult = num1 - num2;
          break;
        case "*":
          newResult = num1 * num2;
          break;
        case "/":
          newResult = num2 !== 0 ? num1 / num2 : "Error";
          break;
        default:
          return;
      }

      setNumber1(newResult.toString());
      setNumber2("");
      setCurrentOperation(null);
    }
  };

  // Handle AC (All Clear) function
  const handleAllClear = () => {
    setNumber1("");
    setNumber2("");
    setCurrentOperation(null);
  };

  return (
    <div className={classNames(styles.wrapper, "container")}>
      <input
        type="text"
        value={currentOperation ? number2 : number1}
        readOnly
      />
      <div className="row mt-3">
        <div className="col-3">
          <Button onClick={() => handleSetNumber(1)}>{1}</Button>
        </div>
        <div className="col-3">
          <Button onClick={() => handleSetNumber(2)}>{2}</Button>
        </div>
        <div className="col-3">
          <Button onClick={() => handleSetNumber(3)}>{3}</Button>
        </div>
        <div className="col-3">
          <Button onClick={() => handleSetOperation("+")}>{"+"}</Button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-3">
          <Button onClick={() => handleSetNumber(4)}>{4}</Button>
        </div>
        <div className="col-3">
          <Button onClick={() => handleSetNumber(5)}>{5}</Button>
        </div>
        <div className="col-3">
          <Button onClick={() => handleSetNumber(6)}>{6}</Button>
        </div>
        <div className="col-3">
          <Button onClick={() => handleSetOperation("-")}>{"-"}</Button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-3">
          <Button onClick={() => handleSetNumber(7)}>{7}</Button>
        </div>
        <div className="col-3">
          <Button onClick={() => handleSetNumber(8)}>{8}</Button>
        </div>
        <div className="col-3">
          <Button onClick={() => handleSetNumber(9)}>{9}</Button>
        </div>
        <div className="col-3">
          <Button onClick={() => handleSetOperation("*")}>{"*"}</Button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-3">
          <Button onClick={() => handleSetNumber("0")}>{0}</Button>
        </div>
        <div className="col-3">
          <Button onClick={handleAllClear}>{"AC"}</Button>
        </div>
        <div className="col-3">
          <Button onClick={calculateResult}>{"="}</Button>
        </div>
        <div className="col-3">
          <Button onClick={() => handleSetOperation("/")}>{"/"}</Button>
        </div>
      </div>
    </div>
  );
}
