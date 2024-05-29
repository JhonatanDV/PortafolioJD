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
        
      </div>
    </section>
  );
};

export default FrameComponent4;
