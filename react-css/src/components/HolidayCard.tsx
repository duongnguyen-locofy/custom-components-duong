import { FunctionComponent } from "react";
import styles from "./HolidayCard.module.css";

type Service = {
  image: string;
  destinationName: string;
  price: number;
  length: string;
};

const HolidayCard: FunctionComponent<Service> = ({
  image,
  destinationName,
  price,
  length,
}) => {
  return (
    <div className={styles.holidaycard}>
      <img className={styles.imageIcon} alt="" src={image} />
      <section className={styles.holidayDetails}>
        <div className={styles.container}>
          <div className={styles.city}>{destinationName}</div>
          <div className={styles.id}>{length}</div>
        </div>
        <div className={styles.price}>${price}</div>
      </section>
    </div>
  );
};

export default HolidayCard;
