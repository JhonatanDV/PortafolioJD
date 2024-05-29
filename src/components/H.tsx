import { FunctionComponent } from "react";
import styles from "./H.module.css";

const H: FunctionComponent = () => {
  return (
    <div className={styles.h2}>
      <div className={styles.parent}>
        <h1 className={styles.h1}>#</h1>
        <h1 className={styles.projects}>projects</h1>
      </div>
      <div className={styles.line7StrokeWrapper}>
        <img
          className={styles.line7Stroke}
          loading="lazy"
          alt=""
          src="/line-7-stroke.svg"
        />
      </div>
    </div>
  );
};

export default H;
