import { FunctionComponent } from "react";
import styles from "./Media.module.css";

const Media: FunctionComponent = () => {
  return (
    <div className={styles.media}>
      <div className={styles.line10StrokeWrapper}>
        <img
          className={styles.line10Stroke}
          loading="lazy"
          alt=""
          src="/line-10-stroke.svg"
        />
      </div>
      <div className={styles.githubParent}>
        <img
          className={styles.githubIcon}
          loading="lazy"
          alt=""
          src="/github.svg"
        />
        <img
          className={styles.dribbleIcon}
          loading="lazy"
          alt=""
          src="/dribble.svg"
        />
        <img
          className={styles.figmaIcon}
          loading="lazy"
          alt=""
          src="/figma.svg"
        />
      </div>
    </div>
  );
};

export default Media;
