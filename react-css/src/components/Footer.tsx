import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <div className={styles.footer}>
      <section className={styles.fickleflightBioParent}>
        <div className={styles.fickleflightBio}>
          <img
            className={styles.logowhiteIcon}
            loading="lazy"
            alt=""
            src="/logowhite@2x.png"
          />
          <div className={styles.fickleFlightIs}>
            Fickle Flight is your one-stop travel portal. We offer hassle free
            flight and hotel bookings. We also have all your flight needs in you
            online shop.
          </div>
          <div className={styles.socialMediaLinksContainer}>
            <div className={styles.socialMediaLink}>
              <img
                className={styles.facebookIcon}
                loading="lazy"
                alt=""
                src="/facebook@2x.png"
              />
            </div>
            <div className={styles.socialMediaLink1}>
              <img
                className={styles.instagramIcon}
                loading="lazy"
                alt=""
                src="/instagram@2x.png"
              />
            </div>
            <div className={styles.socialMediaLink2}>
              <img
                className={styles.twitterIcon}
                loading="lazy"
                alt=""
                src="/twitter@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.containers}>
          <div className={styles.company}>Company</div>
          <div className={styles.linkContainer}>
            <div className={styles.aboutUs}>About Us</div>
            <div className={styles.news}>News</div>
            <div className={styles.careers}>Careers</div>
            <div className={styles.howWeWork}>How we work</div>
          </div>
        </div>
        <div className={styles.containers1}>
          <div className={styles.support}>Support</div>
          <div className={styles.linkContainer1}>
            <div className={styles.account}>Account</div>
            <div className={styles.supportCenter}>Support Center</div>
            <div className={styles.faq}>FAQ</div>
            <div className={styles.accessibility}>Accessibility</div>
          </div>
        </div>
        <div className={styles.containers2}>
          <div className={styles.more}>More</div>
          <div className={styles.linkContainer2}>
            <div className={styles.covidAdvisory}>Covid Advisory</div>
            <div className={styles.airlineFees}>Airline Fees</div>
            <div className={styles.tips}>Tips</div>
            <div className={styles.quarantineRules}>Quarantine Rules</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
