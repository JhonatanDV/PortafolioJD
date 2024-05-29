import { FunctionComponent } from "react";
import H from "./H";
import styles from "./FrameComponent3.module.css";

const FrameComponent3: FunctionComponent = () => {
  return (
    <section id="project" className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.h2Wrapper}>
          <H />
        </div>
        <div className={styles.instanceParent}>
          <div className={styles.frameGroup}>
            <div className={styles.ellipseParent}>
              <div className={styles.frameChild} />
              <div className={styles.frameItem} />
              <div className={styles.frameInner} />
              <div className={styles.ellipseDiv} />
              <div className={styles.frameChild1} />
            </div>
            <div className={styles.ellipseGroup}>
              <div className={styles.frameChild2} />
              <div className={styles.frameChild3} />
              <div className={styles.frameChild4} />
              <div className={styles.frameChild5} />
              <div className={styles.frameChild6} />
            </div>
            <div className={styles.ellipseContainer}>
              <div className={styles.frameChild7} />
              <div className={styles.frameChild8} />
              <div className={styles.frameChild9} />
              <div className={styles.frameChild10} />
              <div className={styles.frameChild11} />
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.frameChild12} />
              <div className={styles.frameChild13} />
              <div className={styles.frameChild14} />
              <div className={styles.frameChild15} />
              <div className={styles.frameChild16} />
            </div>
            <div className={styles.ellipseParent1}>
              <div className={styles.frameChild17} />
              <div className={styles.frameChild18} />
              <div className={styles.frameChild19} />
              <div className={styles.frameChild20} />
              <div className={styles.frameChild21} />
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.projectParent}>
              <div className={styles.project}>
                <img
                  className={styles.projectChild}
                  loading="lazy"
                  alt=""
                  src="/rectangle-22@2x.png"
                />
                <div className={styles.cParent}>
                  <div className={styles.c}>c++</div>
                  <div className={styles.unity}>Unity</div>
                  <div className={styles.flask}>Flask</div>
                  <div className={styles.flask1}>Flask</div>
                </div>
                <div className={styles.htmlParent}>
                  <div className={styles.html}>HTML</div>
                  <div className={styles.scss}>SCSS</div>
                  <div className={styles.python}>Python</div>
                  <div className={styles.flask2}>Flask</div>
                  <div className={styles.flask3}>Flask</div>
                  <div className={styles.flask4}>Flask</div>
                </div>
                <div className={styles.medicalDesignParent}>
                  <h3 className={styles.medicalDesign}>Medical Design</h3>
                  <div className={styles.medicalModeling}>Medical modeling</div>
                </div>
              </div>
              <div className={styles.rectangleParent}>
                <img
                  className={styles.instanceChild}
                  loading="lazy"
                  alt=""
                  src="/rectangle-22-1@2x.png"
                />
                <div className={styles.cGroup}>
                  <div className={styles.c1}>c++</div>
                  <div className={styles.unity1}>Express</div>
                  <div className={styles.flask5}>Flask</div>
                  <div className={styles.flask6}>Flask</div>
                </div>
                <div className={styles.htmlGroup}>
                  <div className={styles.html1}>Unity</div>
                  <div className={styles.scss1}>SCSS</div>
                  <div className={styles.python1}>Python</div>
                  <div className={styles.flask7}>Flask</div>
                  <div className={styles.flask8}>Flask</div>
                  <div className={styles.flask9}>Flask</div>
                </div>
                <div className={styles.medicalDesignGroup}>
                  <h3 className={styles.medicalDesign1}>Hand Washing Design</h3>
                  <div className={styles.medicalModeling1}>{`Modeling `}</div>
                </div>
              </div>
              <div className={styles.rectangleGroup}>
                <img
                  className={styles.instanceItem}
                  loading="lazy"
                  alt=""
                  src="/rectangle-22-2@2x.png"
                />
                <div className={styles.cContainer}>
                  <div className={styles.c2}>c++</div>
                  <div className={styles.unity2}>Blender</div>
                  <div className={styles.flask10}>Flask</div>
                  <div className={styles.flask11}>Flask</div>
                </div>
                <div className={styles.htmlContainer}>
                  <div className={styles.html2}>HTML</div>
                  <div className={styles.scss2}>SCSS</div>
                  <div className={styles.python2}>Python</div>
                  <div className={styles.flask12}>Flask</div>
                  <div className={styles.flask13}>Flask</div>
                  <div className={styles.flask14}>Flask</div>
                </div>
                <div className={styles.medicalDesignContainer}>
                  <h3 className={styles.medicalDesign2}>Room Design</h3>
                  <div className={styles.medicalModeling2}>
                    Room modeling and rendering
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
