import styles from "./App.module.scss";
import Menu from "./components/Menu/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Today from "./pages/Today/Today";
import CalendarPage from "./pages/CalendarPage/CalendarPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Menu />
        <Routes>
          <Route path="/" element={<Today />} />
          <Route path="/calendar" element={<CalendarPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
