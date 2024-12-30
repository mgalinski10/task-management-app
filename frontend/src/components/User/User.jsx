import React from "react";
import styles from "./User.module.scss";
import { useUser } from "../../context/UserContext";

const User = () => {
  const { user } = useUser();

  return (
    <div className={styles.user}>
      <div className={styles.picture}>
        <img src="/img/mock-profile-picture.jpg" alt="user" />
      </div>
      <ul className={styles.information}>
        <li>
          <h3>{user.name}</h3>
        </li>
        <li>
          <p>{user.email}</p>
        </li>
      </ul>
    </div>
  );
};

export default User;
