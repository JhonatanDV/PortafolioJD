import { FunctionComponent } from "react";
import Media from "./Media";
import Header from "./Header";
import styles from "./FrameComponent5.module.css";

const FrameComponent5: FunctionComponent = () => {
  return (
    <div className={styles.homeInner}>
      <div className={styles.mediaParent}>
        <Media />
        <div className={styles.frameParent}>
          <header className={styles.headerWrapper}>
            <Header />
          </header>
          <div className={styles.frameGroup}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameContainer}>
                <div className={styles.jhonatanIsAWebDesignerAndParent}>
                  <h1 className={styles.jhonatanIsAContainer}>
                    <span>{`Jhonatan is a `}</span>
                    <span className={styles.webDesigner}>web designer</span>
                    <span>{` and `}</span>
                    <span className={styles.frontEndDeveloper}>
                      front-end developer
                    </span>
                  </h1>
                  <div className={styles.heCraftsResponsive}>
                    He crafts responsive websites where technologies meet
                    creativity
                  </div>
                </div>
                <button className={styles.button}>
                  <div className={styles.live}>Contact me!!</div>
                </button>
              </div>
            </div>
            <div className={styles.imageParent}>
              <img className={styles.imageIcon} alt="" src="/image@2x.png" />
              <img
                className={styles.imageIcon1}
                loading="lazy"
                alt=""
                src="/image-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
