import styles from "./App.module.scss";
import Menu from "./components/Menu/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodayPage from "./pages/TodayPage/TodayPage";
import CalendarPage from "./pages/CalendarPage/CalendarPage";
import StickyWallPage from "./pages/StickyWallPage/StickyWallPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Menu />
        <Routes>
          <Route path="/" element={<TodayPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/stickywall" element={<StickyWallPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
