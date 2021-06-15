import classes from "./buttonsection.module.css";

function ButtonSection({ handleClick }) {
  return (
    <div className={classes.section}>
      <div className={classes.row}>
        <div
          id="allClear"
          onClick={handleClick}
          className={`${classes.btn} ${classes.functional} ${classes.double}`}
        >
          AC
        </div>
        <div
          id="clear"
          onClick={handleClick}
          className={`${classes.btn} ${classes.functional}`}
        >
          C
        </div>
        <div
          name="operator"
          id="divide"
          onClick={handleClick}
          className={`${classes.btn} ${classes.operator}`}
        >
          /
        </div>
      </div>
      <div className={classes.row}>
        <div id="7" onClick={handleClick} className={`${classes.btn}`}>
          7
        </div>
        <div id="8" onClick={handleClick} className={`${classes.btn}`}>
          8
        </div>
        <div id="9" onClick={handleClick} className={`${classes.btn}`}>
          9
        </div>
        <div
          name="operator"
          id="multiply"
          onClick={handleClick}
          className={`${classes.btn} ${classes.operator}`}
        >
          *
        </div>
      </div>
      <div className={classes.row}>
        <div id="4" onClick={handleClick} className={`${classes.btn}`}>
          4
        </div>
        <div id="5" onClick={handleClick} className={`${classes.btn}`}>
          5
        </div>
        <div id="6" onClick={handleClick} className={`${classes.btn}`}>
          6
        </div>
        <div
          name="operator"
          id="subtract"
          onClick={handleClick}
          className={`${classes.btn} ${classes.operator}`}
        >
          -
        </div>
      </div>
      <div className={classes.row}>
        <div id="1" onClick={handleClick} className={`${classes.btn}`}>
          1
        </div>
        <div id="2" onClick={handleClick} className={`${classes.btn}`}>
          2
        </div>
        <div id="3" onClick={handleClick} className={`${classes.btn}`}>
          3
        </div>
        <div
          name="operator"
          id="add"
          onClick={handleClick}
          className={`${classes.btn} ${classes.operator}`}
        >
          +
        </div>
      </div>
      <div className={classes.row}>
        <div
          id="0"
          onClick={handleClick}
          className={`${classes.btn} ${classes.double}`}
        >
          0
        </div>
        <div id="decimal" onClick={handleClick} className={`${classes.btn}`}>
          .
        </div>
        <div
          name="operator"
          id="equal"
          onClick={handleClick}
          className={`${classes.btn} ${classes.operator}`}
        >
          =
        </div>
      </div>
    </div>
  );
}

export default ButtonSection;
