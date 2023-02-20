import React from "react";
import styles from "./component.module.css";

function Componentone() {
  return (
    <div className={styles.Detail}>
      <div>
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          veritatis omnis ipsum aperiam blanditiis labore, sapiente eum
          voluptate 
        </p>
        <button>Read More</button>
      </div>
    </div>
  );
}

export default Componentone;
