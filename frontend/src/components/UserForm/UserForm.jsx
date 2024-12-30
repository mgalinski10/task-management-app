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
          <select>
            <option value="">Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </li>
        <li className={styles.item}>
          <label>Country</label>
          <select>
            <option value="">Select...</option>
            <option value="gdynia">Poland</option>
            <option value="gdansk">United States</option>
          </select>
        </li>
      </ul>
    </form>
  );
};

export default UserForm;
