// rafce

import React from "react";
import styles from "./User.module.scss";

const User = () => {
  return (
    <div className={styles.user}>
      <div className={styles.picture}>
        <img src="/img/mock-profile-picture.jpg" alt="user" />
      </div>
      <ul className={styles.information}>
        <li>
          <h3>Jeff Bezos</h3>
        </li>
        <li>
          <p>spaceX@interia.pl</p>
        </li>
      </ul>
    </div>
  );
};

export default User;
