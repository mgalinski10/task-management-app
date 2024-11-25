import styles from "./App.module.scss";
import Menu from "./components/Menu/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Today from "./pages/Today/Today";
import { TodayPageProvider } from "./context/TodayContext";
import Calendar from "./pages/Calendar/Calendar";

const App = () => {
  return (
    <BrowserRouter>
      <TodayPageProvider>
        <div className={styles.container}>
          <Menu />
          <Routes>
            <Route path="/" element={<Today />} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </div>
      </TodayPageProvider>
    </BrowserRouter>
  );
};

export default App;
