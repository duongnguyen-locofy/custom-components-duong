import { FunctionComponent } from "react";
import styles from "./FlightMainContainer.module.css";

const FlightMainContainer: FunctionComponent = () => {
  return (
    <div className={styles.flightmaincontainer}>
      <div className={styles.toAndFrom}>
        <div className={styles.details}>
          <h3 className={styles.departurecitycode}>SIN</h3>
          <b className={styles.departurecity}>Singapore</b>
        </div>
        <div className={styles.dateContainer}>
          <div className={styles.flightIcons}>
            <div className={styles.pointWrapper}>
              <div className={styles.point} />
            </div>
            <div className={styles.flightIconsInner}>
              <div className={styles.frameChild} />
            </div>
            <img
              className={styles.ionairplaneIcon}
              loading="lazy"
              alt=""
              src="/ionairplane.svg"
            />
            <div className={styles.flightIconsChild}>
              <div className={styles.frameItem} />
            </div>
            <div className={styles.pointContainer}>
              <div className={styles.point1} />
            </div>
          </div>
        </div>
        <div className={styles.detailsWrapper}>
          <div className={styles.details1}>
            <div className={styles.destinationCity}>
              <h3 className={styles.destinationcitycode}>LAX</h3>
            </div>
            <b className={styles.destinationcity}>Los Angeles</b>
          </div>
        </div>
      </div>
      <div className={styles.departOnDateLabelWrapper}>
        <div className={styles.departOnDateLabel}>
          <b className={styles.departOn}>Depart on:</b>
          <b className={styles.date}>7 Sep 2021</b>
        </div>
      </div>
    </div>
  );
};

export default FlightMainContainer;
