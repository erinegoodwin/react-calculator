import classes from "./display.module.css";

function Display({ display }) {
  return (
    <div value={display} className={classes.display}>
      {display}
    </div>
  );
}

export default Display;
