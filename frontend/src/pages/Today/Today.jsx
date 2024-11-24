import styles from "./Today.module.scss";
import TaskList from "../../components/TaskList/TaskList";
import Form from "../../components/Form/Form";

const Today = () => {
  return (
    <div className={styles.container}>
      <section>
        <h1>Today</h1>
        <TaskList />
      </section>
      <aside>
        <Form />
      </aside>
    </div>
  );
};

export default Today;
