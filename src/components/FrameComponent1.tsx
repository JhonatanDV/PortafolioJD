import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <section id="about" className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.instanceParent}>
          <div className={styles.frameGroup}>
            <div className={styles.parent}>
              <h1 className={styles.h1}>#</h1>
              <h1 className={styles.projects}>about-me</h1>
            </div>
            <div className={styles.line7StrokeWrapper}>
              <img
                className={styles.line7Stroke}
                loading="lazy"
                alt=""
                src="/line-7-stroke-2.svg"
              />
            </div>
          </div>
          <div className={styles.hiImJhonatanImAFrontWrapper}>
            <div className={styles.hiImJhonatanContainer}>
              <p className={styles.hiImJhonatan}>Hi, I'm Jhonatan.</p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p
                className={styles.imAFrontEnd}
              >{`I'm a front-end developer located in Pasto, Colombia. I can develop websites from scratch and turn them into modern and easy to use web experiences. `}</p>
              <p className={styles.blankLine1}>&nbsp;</p>
              <p className={styles.transformingMyCreativity}>
                Transforming my creativity and knowledge into websites has been
                my passion for over a year. I have been helping several clients
                to establish their online presence. I always strive to learn
                about new technologies and frameworks.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.imageParent}>
          <img className={styles.imageIcon} alt="" src="/image@2x.png" />
          <img
            className={styles.line7Stroke1}
            loading="lazy"
            alt=""
            src="/line-7-stroke-3.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
