import styles from "./App.module.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import TodayPage from "./pages/TodayPage/TodayPage";
import CalendarPage from "./pages/CalendarPage/CalendarPage";
import StickyWallPage from "./pages/StickyWallPage/StickyWallPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { useUser } from "./context/UserContext";

const AuthRoutes = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    {/* <Route path="/register" element={<LoginPage />} /> */}
  </Routes>
);

const ProtectedRoute = ({ element }) => {
  const { user } = useUser();
  return user ? element : <Navigate to="/" />;
};

const AppLayout = ({ children }) => (
  <div className={styles.appContainer}>
    <Menu />
    <div className={styles.content}>{children}</div>
  </div>
);

const App = () => {
  const { user } = useUser();

  return (
    <BrowserRouter>
      {!user ? (
        <div className={styles.loginContainer}>
          <AuthRoutes />
        </div>
      ) : (
        <AppLayout>
          <Routes>
            <Route
              path="/today"
              element={<ProtectedRoute element={<TodayPage />} />}
            />
            <Route
              path="/calendar"
              element={<ProtectedRoute element={<CalendarPage />} />}
            />
            <Route
              path="/stickywall"
              element={<ProtectedRoute element={<StickyWallPage />} />}
            />
          </Routes>
        </AppLayout>
      )}
    </BrowserRouter>
  );
};

export default App;
