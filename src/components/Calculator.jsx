import Display from "./Display";
import ButtonSection from "./ButtonSection";
import classes from "./calculator.module.css";
import { useState } from "react";
import { evaluate } from "mathjs";

function Calculator(props) {
  let [display, setDisplay] = useState("0");
  const [evaluated, setEvaluated] = useState(false);

  //Helper function to give me last character of input string.
  //Used to ignore input of multiple operators or decimals in a row.
  function checkLastChar(display) {
    const stringDisplay = display;
    const stringLength = stringDisplay.length;
    const lastChar = stringDisplay.charAt(stringLength - 1);
    return lastChar;
  }

  //Handle clicks inside the ButtonSection component, passed as prop.
  function handleClick(e) {
    //Check if clicked element contains a number.
    if (!isNaN(e.target.textContent)) {
      //If no other numbers have been input, replace the defualt state (0) with the input number.
      //Otherwise, append the new number to the display.
      //Currently, no limit on length of input.
      if (display === "0" || evaluated === true) {
        setDisplay(e.target.textContent);
        setEvaluated(false);
      } else {
        setDisplay(display + e.target.textContent);
      }
    }
    //Decimals should not be appended to evaluated expressions.
    else if (e.target.textContent === "." && evaluated === true) {
      return;
    } else if (e.target.textContent === "." && evaluated === false) {
      //Decimals should not be able to by typed consecutively.
      if (checkLastChar(display) === ".") {
        return;
      } else {
        setDisplay(display + e.target.textContent);
      }
    }
    //Make sure equation does not start with an operator.
    //Special case for negative sign/subtract below.
    else if (
      e.target.id === "add" ||
      e.target.id === "multiply" ||
      e.target.id === "divide"
    ) {
      if (evaluated === true) {
        setDisplay(display + e.target.textContent);
        setEvaluated(false);
      } else if (
        display === "0" ||
        checkLastChar(display) === "*" ||
        checkLastChar(display) === "+" ||
        checkLastChar(display) === "/" ||
        checkLastChar(display) === "-" ||
        checkLastChar(display) === "."
      ) {
        return;
      } else {
        setEvaluated(false);
        setDisplay(display + e.target.textContent);
      }
    }
    //The subtraction symbol has its own logic because it initiates a subtraction but also sets negative values.
    //Equations should be able to start with a negative symbol.
    //Negative symbol should not be able to be used more than once in a row.
    else if (e.target.id === "subtract") {
      if (evaluated === true) {
        setDisplay(display + e.target.textContent);
        setEvaluated(false);
      } else if (display === "0") {
        setDisplay(e.target.textContent);
      } else if (
        checkLastChar(display) === "-" ||
        checkLastChar(display) === "."
      ) {
        return;
      } else {
        setDisplay(display + e.target.textContent);
      }
    }
    //Currently, all-clear and clear buttons have the same functionality:
    //When clicked, set the display to the default (0) and set the state to not evaluated.
    //Will be changing the clear button to a DEL button.
    else if (e.target.textContent === "AC" || e.target.textContent === "C") {
      setDisplay("0");
      setEvaluated(false);
    }
    //When the equal button is pressed, check to make sure that the display
    //does not end with an operator or decimal, then evaluate the input and change the
    //display to reflect the evaluated equation.
    else if (e.target.id === "equal") {
      if (evaluated === true) {
        return;
      } else if (
        checkLastChar(display) === "*" ||
        checkLastChar(display) === "+" ||
        checkLastChar(display) === "/" ||
        checkLastChar(display) === "-" ||
        checkLastChar(display) === "."
      ) {
        return;
      } else {
        display = evaluate(display);
        setDisplay(display);
        setEvaluated(true);
      }
    } else {
      return;
    }
  }

  return (
    <div className={classes.calculator}>
      <Display display={display}></Display>
      <ButtonSection handleClick={handleClick}></ButtonSection>
    </div>
  );
}

export default Calculator;
