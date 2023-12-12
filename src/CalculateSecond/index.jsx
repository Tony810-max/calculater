import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function CalculateSecond() {
  const [valueFirst, setValueFirst] = useState("");
  const [valueSecond, setValueSecond] = useState("");
  const [operator, setOperator] = useState(null);
  const [result, setResult] = useState("");

  const handleSet = (value) => {
    if (!operator) {
      setValueFirst((prev) => prev + value);
    } else {
      setValueSecond((prev) => prev + value);
    }
  };

  const handleOperation = (value) => {
    if (!operator) {
      setOperator(value);
    } else {
      if (valueSecond) {
        calcResult();
        console.log(operator);
      }
      setOperator(value);
    }
  };

  const calcResult = () => {
    if (operator && valueSecond) {
      const firstNumber = parseFloat(valueFirst);
      const secondNumber = parseFloat(valueSecond);
      let newResult;
      switch (operator) {
        case "+":
          newResult = firstNumber + secondNumber;
          break;
        case "-":
          newResult = firstNumber - secondNumber;
          break;
        case "*":
          newResult = firstNumber * secondNumber;
          break;
        case "/":
          newResult = firstNumber / secondNumber;
          break;
        default:
          console.error("Error..!!!");
      }

      setResult(newResult);
      setValueFirst("");
      setOperator(null);
      setValueSecond("");
    }
  };

  return (
    <div className="d-flex justify-content-center mt-3">
      <div className="d-flex flex-column gap-3">
        <input value={operator ? valueSecond : valueFirst} readOnly />
        <input value={result} placeholder="Result" style={{color: "#e63030", fontWeight: "700"}} readOnly />
        <div className="d-flex flex-column gap-2 ">
          <div className="row d-flex justify-content-around ">
            <div className="col-3">
              <Button className="fs-5 w-100 " onClick={() => handleSet("1")}>
                1
              </Button>
            </div>
            <div className="col-3">
              <Button className="fs-5 w-100 " onClick={() => handleSet("2")}>
                2
              </Button>
            </div>
            <div className="col-3">
              <Button className="fs-5 w-100 " onClick={() => handleSet("3")}>
                3
              </Button>
            </div>
            <div className="col-3">
              <Button
                className="fs-5 w-100"
                onClick={() => handleOperation("+")}
              >
                +
              </Button>
            </div>
          </div>
          <div className="row d-flex justify-content-around">
            <div className="col-3">
              <Button className="fs-5 w-100 " onClick={() => handleSet("4")}>
                4
              </Button>
            </div>
            <div className="col-3">
              <Button className="fs-5 w-100" onClick={() => handleSet("5")}>
                5
              </Button>
            </div>
            <div className="col-3">
              <Button className="fs-5 w-100" onClick={() => handleSet("6")}>
                6
              </Button>
            </div>
            <div className="col-3">
              <Button
                className="fs-5 w-100"
                onClick={() => handleOperation("-")}
              >
                -
              </Button>
            </div>
          </div>
          <div className="row d-flex justify-content-around">
            <div className="col-3">
              <Button className="fs-5 w-100" onClick={() => handleSet("7")}>
                7
              </Button>
            </div>
            <div className="col-3">
              <Button className="fs-5 w-100" onClick={() => handleSet("8")}>
                8
              </Button>
            </div>
            <div className="col-3">
              <Button className="fs-5 w-100" onClick={() => handleSet("9")}>
                9
              </Button>
            </div>
            <div className="col-3">
              <Button
                className="fs-5 w-100"
                onClick={() => handleOperation("*")}
              >
                *
              </Button>
            </div>
          </div>
          <div className="row d-flex justify-content-around">
            <div className="col-3">
              <Button className="fs-5 w-100" onClick={() => handleSet("0")}>
                0
              </Button>
            </div>
            <div className="col-3">
              <Button className="fs-5 w-100 d-flex justify-content-center">
                AC
              </Button>
            </div>
            <div className="col-3">
              <Button className="fs-5 w-100" onClick={calcResult}>
                =
              </Button>
            </div>
            <div className="col-3">
              <Button
                className="fs-5 w-100"
                onClick={() => handleOperation("/")}
              >
                /
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
