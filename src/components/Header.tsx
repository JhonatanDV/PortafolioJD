import { FunctionComponent } from "react";
import styles from "./Header.module.css";

const Header: FunctionComponent = () => {
  return (
    <div className={styles.header}>
      <div className={styles.jhonatanWrapper}>
        <b className={styles.jhonatan}>Jhonatan</b>
      </div>
      <div className={styles.headerLinkParent}>
        <div className={styles.headerLink}>
          <div className={styles.div}>#</div>
          <div className={styles.home}>home</div>
        </div>
        <a href="#project" className={styles.headerLink1}>
          <div className={styles.div}>#</div>
          <div className={styles.home1}>works</div>
        </a>
        <a href="#about" className={styles.headerLink2}>
          <div className={styles.div}>#</div>
          <div className={styles.home2}>about-me</div>
        </a>
        <a href="#contacts" className={styles.headerLink3}>
          <div className={styles.div}>#</div>
          <div className={styles.home3}>contacts</div>
        </a>
      </div>
    </div>
  );
};

export default Header;
