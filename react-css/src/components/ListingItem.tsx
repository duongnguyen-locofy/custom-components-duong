import { FunctionComponent } from "react";
import styles from "./ListingItem.module.css";

export type ListingItemType = {
  className?: string;
  listingName?: string;
  listingAddress?: string;
  rating?: string;
  price?: string;
  showSuperhostTag?: boolean;
  imageURL?: string; // Optional property for image URL
};

const ListingItem: FunctionComponent<ListingItemType> = ({
  className = "",
  listingName = "Brightwoods Cabins",
  listingAddress = "Bridlepath, Ontario, Canada",
  rating = "4.9",
  price = "$658",
  showSuperhostTag = true,
  imageURL = "/listingimage@2x.png",
}) => {
  return (
    <div className={[styles.listingItem, className].join(" ")}>
      <img
        className={styles.listingimageIcon}
        alt=""
        src={imageURL || "/listingimage@2x.png"}
      />
      {!!showSuperhostTag && (
        <div className={styles.superhostTag}>
          <img
            className={styles.superhostIcon}
            loading="lazy"
            alt=""
            src="/superhost-icon.svg"
          />
          <div className={styles.superhost}>Superhost</div>
        </div>
      )}
      <img
        className={styles.heartIcon}
        loading="lazy"
        alt=""
        src="/heart-icon@2x.png"
      />
      <section className={styles.itemDetails}>
        <div className={styles.listingInfo}>
          <div className={styles.listingCont}>
            <div className={styles.listingName}>{listingName}</div>
            <div className={styles.listingAddress}>{listingAddress}</div>
          </div>
          <div className={styles.ratingCont}>
            <div className={styles.rating}>{rating}</div>
            <img
              className={styles.starIcon}
              loading="lazy"
              alt=""
              src="/star-icon.svg"
            />
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.pricePerNight}>
            <div className={styles.rating}>{price}</div>
            <div className={styles.night}>/night</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListingItem;
