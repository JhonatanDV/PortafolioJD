import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <section id="contacts" className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.parent}>
            <h1 className={styles.h1}>/</h1>
            <div className={styles.contactsWrapper}>
              <h1 className={styles.contacts}>contacts</h1>
            </div>
          </div>
          <div className={styles.whoAmI}>Who am I?</div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.imInterestedInFreelanceOpParent}>
              <div className={styles.imInterestedIn}>
                I’m interested in freelance opportunities. However, if you have
                other request or question, don’t hesitate to contact me
              </div>
              <div className={styles.h2Parent}>
                <div className={styles.h2}>
                  <h1 className={styles.h11}>#</h1>
                  <h1 className={styles.smallProjects}>all-media</h1>
                </div>
                <div className={styles.frameParent1}>
                  <div className={styles.mediaParent}>
                    <div className={styles.media}>
                      <img className={styles.twitterIcon} alt="" />
                      <div className={styles.eliasWrapper}>
                        <div className={styles.elias}>+57 3223246566</div>
                      </div>
                    </div>
                    <img
                      className={styles.vectorIcon}
                      loading="lazy"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                  <div className={styles.mediaGroup}>
                    <div className={styles.media1}>
                      <img className={styles.twitterIcon1} alt="" />
                      <div className={styles.eliasContainer}>
                        <div className={styles.elias1}>JhonatanDV</div>
                      </div>
                    </div>
                    <img
                      className={styles.vectorIcon1}
                      loading="lazy"
                      alt=""
                      src="/vector-1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.messageMeHereParent}>
            <div className={styles.messageMeHere}>Message me here</div>
            <div className={styles.instanceParent}>
              <div className={styles.discordParent}>
                <img
                  className={styles.discordIcon}
                  loading="lazy"
                  alt=""
                  src="/discord.svg"
                />
                <div className={styles.elias2}>HEREJ3</div>
              </div>
              <div className={styles.emailParent}>
                <img
                  className={styles.emailIcon}
                  loading="lazy"
                  alt=""
                  src="/email.svg"
                />
                <div className={styles.elias3}>jhonatandiaz918@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
