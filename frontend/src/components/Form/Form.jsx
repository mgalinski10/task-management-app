import styles from "./Form.module.scss";
import { useState } from "react";

import Header from "./Header/Header";
import TaskDetailsForm from "../TaskDetailsForm/TaskDetailsForm";
import Buttons from "./Buttons/Buttons";

const Form = () => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");
  const [date, setDate] = useState("");

  return (
    <form>
      <Header />
      <input
        className={styles.input}
        type="text"
        placeholder={"Enter Task Name"}
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <textarea
        className={styles.description}
        rows="8"
        placeholder={"Description"}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <TaskDetailsForm
        date={date}
        priority={priority}
        setDate={setDate}
        setPriority={setPriority}
      />

      <Buttons />
    </form>
  );
};

export default Form;
