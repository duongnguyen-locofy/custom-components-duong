import { FunctionComponent } from "react";
import styles from "./SubscribeSection.module.css";

const SubscribeSection: FunctionComponent = () => {
  return (
    <div className={styles.subscribesection}>
      <div className={styles.formContainer}>
        <div className={styles.formHeader}>
          <b className={styles.formTitleSubtext}>subscribe to our newsletter</b>
          <h2 className={styles.formTitle}>Get weekly updates</h2>
        </div>
        <form className={styles.form}>
          <div className={styles.fillInYour}>
            Fill in your details to join the party!
          </div>
          <div className={styles.formFields}>
            <div className={styles.nameInput}>
              <input
                className={styles.yourName}
                placeholder="Your name"
                type="text"
              />
            </div>
            <div className={styles.emailInput}>
              <input
                className={styles.emailAddress}
                placeholder="Email address"
                type="text"
              />
            </div>
          </div>
          <button className={styles.button}>
            <div className={styles.buttonInst}>Search</div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeSection;
