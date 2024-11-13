import styles from "./App.module.scss";
import Menu from "./components/Menu/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Today from "./pages/Today/Today";

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Menu />
        <Routes>
          <Route path="/" element={<Today />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
