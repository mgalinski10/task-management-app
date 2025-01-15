import React, { useState, useEffect } from "react";
import styles from "./UserForm.module.scss";
import Button from "../Button/Button";
import { useUser } from "../../context/UserContext";
import axios from "axios";
import { useProfile } from "../../context/ProfileContext";

const UserForm = ({ initialData = {} }) => {
  const { user } = useUser();
  const { fetchProfileDetails } = useProfile();
  const [nickname, setNickname] = useState(initialData.nickname || "");
  const [gender, setGender] = useState(initialData.gender || "");
  const [country, setCountry] = useState(initialData.country || "");

  useEffect(() => {
    fetchProfileDetails();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const profileDetails = {
      nickname,
      gender,
      country,
      userId: user.id,
    };

    try {
      if (!initialData._id) {
        await axios.post(
          "http://localhost:5000/api/user-details",
          profileDetails,
          {
            withCredentials: true,
          }
        );
      } else {
        await axios.put(
          `http://localhost:5000/api/user-details`,
          profileDetails,
          {
            withCredentials: true,
          }
        );
      }
      alert("Data has been saved");
    } catch (error) {
      console.error("Error creating user details:", error);
    } finally {
      await fetchProfileDetails();
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this data?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/user-details`, {
        withCredentials: true,
      });

      alert("Data has been deleted.");
    } catch (error) {
      console.error("Error deleting user details:", error);
      alert("An error occurred while deleting the data.");
    } finally {
      await fetchProfileDetails();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
          <Button backgroundColor="rgb(255, 103, 86)" onClick={handleDelete}>
            Reset
          </Button>
          <Button type="submit" backgroundColor="rgb(254, 215, 19)">
            Save
          </Button>
        </li>
      </ul>
    </form>
  );
};

export default UserForm;
