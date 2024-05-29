import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

const FrameComponent2: FunctionComponent = () => {
  return (
    <section className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.instanceWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.parent}>
              <h1 className={styles.h1}>#</h1>
              <h1 className={styles.projects}>skills</h1>
            </div>
            <div className={styles.line7StrokeWrapper}>
              <img
                className={styles.line7Stroke}
                loading="lazy"
                alt=""
                src="/line-7-stroke-1.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.blockParent}>
          <div className={styles.block}>
            <div className={styles.languagesWrapper}>
              <div className={styles.languages}>Languages</div>
            </div>
            <div className={styles.blockChild} />
            <div className={styles.frameContainer}>
              <div className={styles.javascriptParent}>
                <div className={styles.javascript}>JavaScript</div>
                <div className={styles.c}>C++</div>
                <div className={styles.lua}>Lua</div>
                <div className={styles.lua1}>Lua</div>
              </div>
              <div className={styles.pythonParent}>
                <div className={styles.python}>Python</div>
                <div className={styles.javascript1}>JavaScript</div>
              </div>
              <div className={styles.pythonGroup}>
                <div className={styles.python1}>Python</div>
                <div className={styles.javascript2}>JavaScript</div>
              </div>
              <div className={styles.pythonContainer}>
                <div className={styles.python2}>Python</div>
                <div className={styles.javascript3}>JavaScript</div>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.instanceParent}>
              <div className={styles.frameParent1}>
                <div className={styles.languagesContainer}>
                  <div className={styles.languages1}>Databases</div>
                </div>
                <div className={styles.instanceChild} />
                <div className={styles.frameParent2}>
                  <div className={styles.javascriptGroup}>
                    <div className={styles.javascript4} />
                    <div className={styles.c1}>PostgreSQL</div>
                    <div className={styles.lua2}>Lua</div>
                    <div className={styles.lua3}>Lua</div>
                  </div>
                  <div className={styles.pythonParent1}>
                    <div className={styles.python3} />
                    <div className={styles.javascript5}>JavaScript</div>
                  </div>
                  <div className={styles.pythonParent2}>
                    <div className={styles.python4}>Python</div>
                    <div className={styles.javascript6}>JavaScript</div>
                  </div>
                  <div className={styles.pythonParent3}>
                    <div className={styles.python5}>Python</div>
                    <div className={styles.javascript7}>JavaScript</div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.languagesFrame}>
                  <div className={styles.languages2}>Other</div>
                </div>
                <div className={styles.instanceItem} />
                <div className={styles.frameParent4}>
                  <div className={styles.javascriptContainer}>
                    <div className={styles.javascript8}>HTML</div>
                    <div className={styles.c2}>CSS</div>
                    <div className={styles.lua4}>EJS</div>
                    <div className={styles.lua5}>SCSS</div>
                  </div>
                  <div className={styles.pythonParent4}>
                    <div className={styles.python6}>REST</div>
                    <div className={styles.javascript9}>JavaScript</div>
                  </div>
                  <div className={styles.pythonParent5}>
                    <div className={styles.python7}>Jinja</div>
                    <div className={styles.javascript10}>Express.js</div>
                  </div>
                  <div className={styles.pythonParent6}>
                    <div className={styles.python8}>Python</div>
                    <div className={styles.javascript11}>JavaScript</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.instanceGroup}>
              <div className={styles.frameParent5}>
                <div className={styles.languagesWrapper1}>
                  <div className={styles.languages3}>Tools</div>
                </div>
                <div className={styles.instanceInner} />
                <div className={styles.frameParent6}>
                  <div className={styles.javascriptParent1}>
                    <div className={styles.javascript12}>VSCode</div>
                    <div className={styles.c3}>Neovim</div>
                    <div className={styles.lua6}>Lua</div>
                    <div className={styles.lua7}>Linux</div>
                  </div>
                  <div className={styles.pythonParent7}>
                    <div className={styles.python9}>Figma</div>
                    <div className={styles.javascript13}>Arch</div>
                  </div>
                  <div className={styles.pythonParent8}>
                    <div className={styles.python10}>Git</div>
                    <div className={styles.javascript14}>Font Awesome</div>
                  </div>
                  <div className={styles.pythonParent9}>
                    <div className={styles.python11}>Python</div>
                    <div className={styles.javascript15}>JavaScript</div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent7}>
                <div className={styles.languagesWrapper2}>
                  <div className={styles.languages4}>Frameworks</div>
                </div>
                <div className={styles.lineDiv} />
                <div className={styles.frameParent8}>
                  <div className={styles.javascriptParent2}>
                    <div className={styles.javascript16}>React</div>
                    <div className={styles.c4}>Django Rest-Framework</div>
                    <div className={styles.lua8}>Lua</div>
                    <div className={styles.lua9}>Lua</div>
                  </div>
                  <div className={styles.pythonParent10}>
                    <div className={styles.python12}>Disnake</div>
                    <div className={styles.javascript17}>JavaScript</div>
                  </div>
                  <div className={styles.pythonParent11}>
                    <div className={styles.python13}>Flask</div>
                    <div className={styles.javascript18}>Express.js</div>
                  </div>
                  <div className={styles.pythonParent12}>
                    <div className={styles.python14}>Python</div>
                    <div className={styles.javascript19}>JavaScript</div>
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

export default FrameComponent2;
