import styles from "./App.module.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import TodayPage from "./pages/TodayPage/TodayPage";
import CalendarPage from "./pages/CalendarPage/CalendarPage";
import StickyWallPage from "./pages/StickyWallPage/StickyWallPage";
import LoginPage from "./pages/LoginPage/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.appContainer}>
        <Menu />
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/today" element={<TodayPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/stickywall" element={<StickyWallPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
