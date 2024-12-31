import React, { useEffect } from "react";
import styles from "./ProfilePage.module.scss";
import PageTitle from "../../components/PageTitle/PageTitle";
import User from "../../components/User/User";
import UserForm from "../../components/UserForm/UserForm";
import { useProfile } from "../../context/ProfileContext";

const ProfilePage = () => {
  const { fetchProfileDetails, profileDetails } = useProfile();

  useEffect(() => {
    fetchProfileDetails();
  }, []);

  return (
    <div className={styles.container}>
      <PageTitle title="Profile" />
      <section>
        <User />
        <UserForm initialData={profileDetails} />
      </section>
    </div>
  );
};

export default ProfilePage;
