import classes from "./buttonsection.module.css";

function ButtonSection({ handleClick }) {
  return (
    <div className={classes.section}>
      <div className={classes.bigbuttonrow}>
        <button
          id="allClear"
          onClick={handleClick}
          className={`${classes.btn} ${classes.functional} ${classes.rowdouble}`}
        >
          AC
        </button>
        <button
          id="clear"
          onClick={handleClick}
          className={`${classes.btn} ${classes.functional}`}
        >
          C
        </button>
        <button
          name="operator"
          id="divide"
          onClick={handleClick}
          className={`${classes.btn} ${classes.operator}`}
        >
          /
        </button>
      </div>
      <div className={classes.row}>
        <button id="7" onClick={handleClick} className={`${classes.btn}`}>
          7
        </button>
        <button id="8" onClick={handleClick} className={`${classes.btn}`}>
          8
        </button>
        <button id="9" onClick={handleClick} className={`${classes.btn}`}>
          9
        </button>
        <button
          name="operator"
          id="multiply"
          onClick={handleClick}
          className={`${classes.btn} ${classes.operator}`}
        >
          *
        </button>
      </div>
      <div className={classes.row}>
        <button id="4" onClick={handleClick} className={`${classes.btn}`}>
          4
        </button>
        <button id="5" onClick={handleClick} className={`${classes.btn}`}>
          5
        </button>
        <button id="6" onClick={handleClick} className={`${classes.btn}`}>
          6
        </button>
        <button
          name="operator"
          id="subtract"
          onClick={handleClick}
          className={`${classes.btn} ${classes.operator}`}
        >
          -
        </button>
      </div>
      <div className={classes.row}>
        <button id="1" onClick={handleClick} className={`${classes.btn}`}>
          1
        </button>
        <button id="2" onClick={handleClick} className={`${classes.btn}`}>
          2
        </button>
        <button id="3" onClick={handleClick} className={`${classes.btn}`}>
          3
        </button>
        <button
          name="operator"
          id="add"
          onClick={handleClick}
          className={`${classes.btn} ${classes.operator}`}
        >
          +
        </button>
      </div>
      <div className={classes.bigbuttonrow}>
        <button
          id="0"
          onClick={handleClick}
          className={`${classes.btn} ${classes.rowdouble}`}
        >
          0
        </button>
        <button id="decimal" onClick={handleClick} className={`${classes.btn}`}>
          .
        </button>
        <button
          name="operator"
          id="equal"
          onClick={handleClick}
          className={`${classes.btn} ${classes.operator}`}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default ButtonSection;
