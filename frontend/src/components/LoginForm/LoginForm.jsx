import { useState } from "react";
import { useUser } from "../../context/UserContext";
import Form from "../Form/Form";
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  const { login, register } = useUser();
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const resetForm = () => {
    setName("");
    setPassword("");
    setEmail("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    try {
      if (!isRegister) {
        await login(email, password);
      } else {
        await register({ email, password, name });
        setIsRegister(false);
      }
    } catch (err) {
      console.log(err);
    } finally {
      resetForm();
    }
  };

  return (
    <Form
      isHeader={false}
      actionBtnTitle={!isRegister ? "Log in" : "Register"}
      onSubmit={handleSubmit}
    >
      {<h1 className={styles.title}>{!isRegister ? "LOGIN" : "REGISTER"}</h1>}
      <ul className={styles.loginInputs}>
        <li className={styles.input}>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </li>
        {isRegister && (
          <li className={styles.input}>
            <input
              type="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </li>
        )}
        <li className={styles.input}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </li>
      </ul>

      {!isRegister ? (
        <p className={styles.information}>
          Don't have an account?{" "}
          <span onClick={() => setIsRegister(true)}>Create it here!</span>
        </p>
      ) : (
        <p className={styles.information}>
          Already have an account?{" "}
          <span onClick={() => setIsRegister(false)}>Log in!</span>
        </p>
      )}
    </Form>
  );
};

export default LoginForm;
