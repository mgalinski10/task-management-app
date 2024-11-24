import styles from "./Today.module.scss";
import TaskList from "../../components/TaskList/TaskList";
import Form from "../../components/Form/Form";
import { useToday } from "../../context/TodayContext";

const Today = () => {
  const { isOpen } = useToday();

  return (
    <div className={styles.container}>
      <section>
        <h1>Today</h1>
        <TaskList />
      </section>
      <aside>{isOpen && <Form />}</aside>
    </div>
  );
};

export default Today;
