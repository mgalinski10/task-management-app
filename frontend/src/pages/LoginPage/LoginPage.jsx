import { useState } from "react";
import { useUser } from "../../context/UserContext";
import Form from "../../components/Form/Form";
import styles from "./LoginPage.module.scss";

const LoginPage = () => {
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
    <div className={styles.container}>
      <Form isHeader={false} actionBtnTitle={"Log in"} onSubmit={handleSubmit}>
        <h1 className={styles.title}>LOGIN</h1>
        <ul className={styles.labels}>
          <li>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>
          <li>
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
    </div>
  );
};

export default LoginPage;
