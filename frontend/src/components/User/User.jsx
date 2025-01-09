import React from "react";
import styles from "./User.module.scss";

const User = ({ name, email }) => {
  return (
    <div className={styles.user}>
      <div className={styles.picture}>
        <img src="/img/mock-profile-picture.jpg" alt="user" />
      </div>
      <ul className={styles.information}>
        <li>
          <h3>{name}</h3>
        </li>
        <li>
          <p>{email}</p>
        </li>
      </ul>
    </div>
  );
};

export default User;
