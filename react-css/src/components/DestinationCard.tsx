import { FunctionComponent } from "react";
import styles from "./DestinationCard.module.css";

type Destination = {
  name: string;
  price: number;
};
type ComponentType = {
  destination: Destination;
};

const DestinationCard: FunctionComponent<ComponentType> = ({ destination }) => {
  return (
    <div className={styles.destinationcard}>
      <div className={styles.cityParent}>
        <b className={styles.city}>{destination.name}</b>
        <div className={styles.from}>from</div>
      </div>
      <div className={styles.priceWrapper}>
        <div className={styles.price}>${destination.price}</div>
      </div>
    </div>
  );
};

export default DestinationCard;
