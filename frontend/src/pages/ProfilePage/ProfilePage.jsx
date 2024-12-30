import React from "react";
import styles from "./ProfilePage.module.scss";
import PageTitle from "../../components/PageTitle/PageTitle";
import User from "../../components/User/User";
import UserForm from "../../components/UserForm/UserForm";

const ProfilePage = () => {
  return (
    <div className={styles.container}>
      <PageTitle title="Profile" />
      <section>
        <User />
        <UserForm />
      </section>
    </div>
  );
};

export default ProfilePage;
