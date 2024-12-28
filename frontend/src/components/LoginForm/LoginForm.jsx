import { useState } from "react";
import { useUser } from "../../context/UserContext";
import Form from "../Form/Form";
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  const { login } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    try {
      await login(email, password);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form isHeader={false} actionBtnTitle={"Log in"} onSubmit={handleSubmit}>
      <h1 className={styles.title}>LOGIN</h1>
      <ul className={styles.loginInputs}>
        <li className={styles.input}>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </li>
        <li className={styles.input}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </li>
      </ul>

      <p className={styles.information}>
        Don't have an account? <a href="/register">Create it here!</a>
      </p>
    </Form>
  );
};

export default LoginForm;
