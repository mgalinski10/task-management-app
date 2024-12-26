import Form from "../../components/Form/Form";
import styles from "./LoginPage.module.scss";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <Form isHeader={false} actionBtnTitle={"Log in"}>
        <h1 className={styles.title}>LOGIN</h1>
        <ul className={styles.labels}>
          <li>
            <input placeholder="E-mail"></input>
          </li>
          <li>
            <input placeholder="Password" type="password"></input>
          </li>
        </ul>
        <p className={styles.information}>
          Don't have account? Create it here!{" "}
        </p>
      </Form>
    </div>
  );
};

export default LoginPage;
