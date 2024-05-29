import { FunctionComponent } from "react";
import styles from "./Media.module.css";

const Media: FunctionComponent = () => {
  return (
    <div className={styles.media}>
      <div className={styles.line10StrokeWrapper}>
        <img
          className={styles.line10Stroke}
          loading="lazy"


        />
      </div>
      <div className={styles.githubParent}>
        <img
          className={styles.githubIcon}
          loading="lazy"
          alt=""

        />
        <img
          className={styles.dribbleIcon}
          loading="lazy"
          alt=""

        />
        <img
          className={styles.figmaIcon}
          loading="lazy"
          alt=""
        />
      </div>
    </div>
  );
};

export default Media;
