import { FunctionComponent } from "react";
import styles from "./HotelCard.module.css";

const HotelCard: FunctionComponent = () => {
  return (
    <div className={styles.hotelcard}>
      <img className={styles.imageIcon} alt="" src="/image@2x.png" />
      <div className={styles.stayDetails}>
        <div className={styles.stayDetailsRows}>
          <div className={styles.hoteltype}>Entire bungalow</div>
          <h3 className={styles.hotelname}>Matterhorn Suites</h3>
          <div className={styles.price}>$575/night</div>
        </div>
        <img
          className={styles.videoIcon}
          loading="lazy"
          alt=""
          src="/video.svg"
        />
      </div>
      <div className={styles.rating}>
        <div className={styles.vectorParent}>
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
          <div className={styles.rating1}>4.9</div>
        </div>
        <div className={styles.reviews}>(60 reviews)</div>
      </div>
      <div className={styles.moreDetailsButton}>
        <div className={styles.button}>More details</div>
      </div>
    </div>
  );
};

export default HotelCard;
