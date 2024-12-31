import { ProfilePageProvider } from "./context/ProfileContext";
import { StickyWallPageProvider } from "./context/StickyWallContext";
import { TaskPageProvider } from "./context/TaskContext";
import { UserProvider } from "./context/UserContext";

const AppProviders = ({ children }) => {
  return (
    <ProfilePageProvider>
      <UserProvider>
        <TaskPageProvider>
          <StickyWallPageProvider>{children}</StickyWallPageProvider>
        </TaskPageProvider>
      </UserProvider>
    </ProfilePageProvider>
  );
};

export default AppProviders;
