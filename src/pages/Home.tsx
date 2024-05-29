import { FunctionComponent } from "react";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./Home.module.css";

const Home: FunctionComponent = () => {
  return (
    <div className={styles.home}>
      <FrameComponent5 />
      <main className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <input className={styles.frameInput} type="checkbox" />
            <input
              className={styles.currentlyWorkingOn}
              placeholder="Currently working on Portfolio"
              type="text"
            />
          </div>
        </div>
        <FrameComponent4 />
        <FrameComponent3 />
        <FrameComponent2 />
        <FrameComponent1 />
        <FrameComponent />
      </main>
    </div>
  );
};

export default Home;
