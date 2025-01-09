import React, { useEffect } from "react";
import styles from "./ProfilePage.module.scss";
import PageTitle from "../../components/PageTitle/PageTitle";
import User from "../../components/User/User";
import UserForm from "../../components/UserForm/UserForm";
import { useProfile } from "../../context/ProfileContext";
import { useUser } from "../../context/UserContext";

const ProfilePage = () => {
  const { fetchProfileDetails, profileDetails } = useProfile();
  const { user } = useUser();

  useEffect(() => {
    fetchProfileDetails();
  }, []);

  return (
    <div className={styles.container}>
      <PageTitle title="Profile" />
      <section>
        <User name={user.name} email={user.email} />
        <UserForm initialData={profileDetails} />
      </section>
    </div>
  );
};

export default ProfilePage;
