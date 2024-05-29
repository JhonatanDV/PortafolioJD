import { FunctionComponent } from "react";
import styles from "./FrameComponent4.module.css";

const FrameComponent4: FunctionComponent = () => {
  return (
    <section className={styles.quoteWrapper}>
      <div className={styles.quote}>
        <h3 className={styles.thePresentIs}>
          “The present is theirs; the future, for which I really worked, is
          mine.”
        </h3>
        <div className={styles.wrapper}>
          <img className={styles.icon} loading="lazy" alt="" src="/.svg" />
        </div>
        <div className={styles.quoteInner}>
          <button className={styles.nikolaTeslaParent}>
            <div className={styles.nikolaTesla}>- Nikola Tesla</div>
            <div className={styles.container}>
              <img className={styles.icon1} alt="" src="/.svg" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
