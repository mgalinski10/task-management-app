import { BrowserRouter } from "react-router-dom";
import { ProfilePageProvider } from "./context/ProfileContext";
import { StickyWallPageProvider } from "./context/StickyWallContext";
import { TaskPageProvider } from "./context/TaskContext";
import { UserProvider } from "./context/UserContext";

const AppProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <ProfilePageProvider>
        <UserProvider>
          <TaskPageProvider>
            <StickyWallPageProvider>{children}</StickyWallPageProvider>
          </TaskPageProvider>
        </UserProvider>
      </ProfilePageProvider>
    </BrowserRouter>
  );
};

export default AppProviders;
