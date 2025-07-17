import { FunctionComponent } from "react";
import styles from "./TripItem.module.css";

const TripItem: FunctionComponent = () => {
  return (
    <div className={styles.tripitem}>
      <div className={styles.iconWrapper}>
        <img className={styles.icon} loading="lazy" alt="" src="/icon@2x.png" />
      </div>
      <div className={styles.text}>Hotel</div>
    </div>
  );
};

export default TripItem;
