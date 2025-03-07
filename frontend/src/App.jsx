import styles from "./App.module.scss";
import { Routes, Route } from "react-router-dom";
import { useUser } from "./context/UserContext";
import Menu from "./components/Menu/Menu";
import TaskPage from "./pages/TaskPage/TaskPage";
import StickyWallPage from "./pages/StickyWallPage/StickyWallPage";
import LoginForm from "./components/LoginForm/LoginForm";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

const MainLayout = () => {
  return (
    <div className={styles.appContainer}>
      <Menu />
      <div className={styles.content}>
        <Routes>
          <Route path="/tasks" element={<TaskPage />} />
          <Route path="/stickywall" element={<StickyWallPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </div>
  );
};

const LoginLayout = () => {
  return (
    <div className={styles.loginContainer}>
      <LoginForm />
    </div>
  );
};

const App = () => {
  const { user } = useUser();

  return <>{!user ? <LoginLayout /> : <MainLayout />}</>;
};

export default App;
