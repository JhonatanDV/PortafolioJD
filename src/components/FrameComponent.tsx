import { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importa FontAwesomeIcon
import { faGithub, faTelegram, faDiscord, } from '@fortawesome/free-brands-svg-icons';
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
              
            </div>
            <div className={styles.messageMeHereParent}>
              <div className={styles.messageMeHere}>Message me here</div>
              <div className={styles.h2Parent}>
                <div className={styles.frameParent1}>
                <div className="flex justify-end gap-6 text-black">
                <div className={styles.whoAmI}>Telegram</div>
                    <a href="https://t.me/JhonatanDV18" target="_blank" rel="noopener noreferrer" className="social-icon text-3xl">
                      <FontAwesomeIcon icon={faTelegram} />
                    </a>
                  </div>
                  <div className="flex justify-end gap-6 text-black">
                  <div className={styles.whoAmI}>GitHub</div>
                    <a href="https://github.com/JhonatanDV" target="_blank" rel="noopener noreferrer" className="social-icon text-3xl">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </div>
                  <div className="flex justify-end gap-6 text-black">
                  <div className={styles.whoAmI}>Discord</div>
                    <a href="https://discordapp.com/users/HEREJ3#7614" target="_blank" rel="noopener noreferrer" className="social-icon test-3xl">
                      <FontAwesomeIcon icon={faDiscord} />
                    </a>
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

export default FrameComponent;
