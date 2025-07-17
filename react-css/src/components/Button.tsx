import { FunctionComponent } from "react";
import "./icons.css";
import styles from "./Button.module.css";
import itnicons from "./itnicons.svg";

const Button: FunctionComponent = () => {
  debugger
  return (
    <div className={styles.button}>
      <div className={styles.text}>Search</div>
      <img src={itnicons} width={30} height={30} alt="icon"/>
    </div>
  );
};

export default Button;
