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
        <a href="#project">
        <div className={styles.headerLink1}>
          <div className={styles.div1}>#</div>
          <div className={styles.home1}>works</div>
        </div>
        </a>
        <a href="#about">
        <div className={styles.headerLink2}>
          <div className={styles.div2}>#</div>
          <div className={styles.home2}>about-me</div>
        </div>
        </a>
        <a href="#contacts">
        <div className={styles.headerLink3}>
          <div className={styles.div3}>#</div>
          <div className={styles.home3}>contacts</div>
        </div>
        </a>
        <div className={styles.languageSwitcher}>
          <div className={styles.en}>EN</div>
          <img
            className={styles.languageSwitcherChild}
            loading="lazy"
            alt=""
            src="/group-58.svg"
          />
          <div className={styles.ruParent}>
            <div className={styles.ru}>RU</div>
            <div className={styles.ua}>UA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
