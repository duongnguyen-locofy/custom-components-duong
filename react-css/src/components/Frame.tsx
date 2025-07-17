import { FunctionComponent } from "react";
import styles from "./Frame.module.css";

const Frame: FunctionComponent = () => {
  return (
    <div className={styles.headerParent}>
      <section className={styles.header}>
        <div className={styles.headerContainer}>
          <img
            className={styles.logoblueIcon}
            loading="lazy"
            alt=""
            src="/logoblue@2x.png"
          />
          <div className={styles.navigationRight}>
            <div className={styles.navigationMenu}>
              <div className={styles.navigationlink}>
                <div className={styles.navigationLink}>Explore</div>
              </div>
              <button className={styles.navigationlink1}>
                <div className={styles.text}>Search</div>
              </button>
              <div className={styles.navigationlink2}>
                <div className={styles.text1}>Hotels</div>
              </div>
              <div className={styles.navigationlink3}>
                <div className={styles.text2}>Offers</div>
              </div>
            </div>
            <div className={styles.accountSection}>
              <img
                className={styles.hamburgerMenuIcon}
                alt=""
                src="/hamburgermenu@2x.png"
              />
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/icon1@2x.png"
              />
              <img
                className={styles.avatarIcon}
                loading="lazy"
                alt=""
                src="/avatar@2x.png"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Frame;
