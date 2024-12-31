import React, { useState } from "react";
import styles from "./UserForm.module.scss";
import Button from "../Button/Button";

const UserForm = () => {
  const [nickname, setNickname] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");

  return (
    <form>
      <ul className={styles.labels}>
        <li className={styles.item}>
          <label>Nickname</label>
          <input
            placeholder="Enter your Nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </li>
        <li className={styles.item}>
          <label>Gender</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </li>
        <li className={styles.item}>
          <label>Country</label>
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="">Select...</option>
            <option value="poland">Poland</option>
            <option value="usa">United States</option>
          </select>
        </li>
        <li className={styles.button}>
          <Button type="submit" backgroundColor="rgb(254, 215, 19)">
            Save
          </Button>
        </li>
      </ul>
    </form>
  );
};

export default UserForm;
