import React from "react";
import styles from "./UserForm.module.scss";

const UserForm = () => {
  return (
    <form>
      <ul className={styles.labels}>
        <li className={styles.item}>
          <label>Nickname</label>
          <input placeholder="Enter your Nickname" />
        </li>
        <li className={styles.item}>
          <label>Gender</label>
          <input placeholder="Choose your gender" />
        </li>
        <li className={styles.item}>
          <label>City</label>
          <input placeholder="Chose your City" />
        </li>
        <li className={styles.item}>
          <label>Country</label>
          <input placeholder="Choose yout Country" />
        </li>
      </ul>
    </form>
  );
};

export default UserForm;
