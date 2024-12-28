import styles from "./App.module.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import TodayPage from "./pages/TodayPage/TodayPage";
import CalendarPage from "./pages/CalendarPage/CalendarPage";
import StickyWallPage from "./pages/StickyWallPage/StickyWallPage";
import LoginForm from "./components/LoginForm/LoginForm";
import { useUser } from "./context/UserContext";

const MainLayout = () => {
  return (
    <div className={styles.appContainer}>
      <Menu />
      <div className={styles.content}>
        <Routes>
          <Route path="/" element={<TodayPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/stickywall" element={<StickyWallPage />} />
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
  return (
    <BrowserRouter>{!user ? <LoginLayout /> : <MainLayout />}</BrowserRouter>
  );
};

export default App;
