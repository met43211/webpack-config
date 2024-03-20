import { useState } from "react";
import "../static/styles/index.scss";
import styles from "../static/styles/App.module.scss";
import { Link, Outlet } from "react-router-dom";
import im1 from "@/assets/im1.png";
import im2 from "@/assets/im2.jpeg";
import Fire from "@/assets/Fire.svg";

function App() {
  const [counter, setCounter] = useState(0);
  // console.log(`PLATFORM=${__PLATFORM__}`);
  return (
    <div className="app" data-testid="App.testID">
      <div>
        <img src={im1} alt="im1" height={150} />
        <img src={im2} alt="im2" height={150} />
      </div>
      <div>
        <Fire height={50} width={50} color="green" />
      </div>
      <Link to={"/about"}>about</Link>
      <br />
      <Link to={"/shop"}>shop</Link>
      <h1 className={styles.h}>{counter}</h1>
      <button
        className={styles.btn}
        onClick={() => {
          setCounter((prev) => (prev += 1));
        }}
      >
        +
      </button>
      <Outlet />
    </div>
  );
}

export default App;
