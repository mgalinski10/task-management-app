import { StickyWallPageProvider } from "./context/StickyWallContext";
import { TaskPageProvider } from "./context/TaskContext";
import { UserProvider } from "./context/UserContext";

const AppProviders = ({ children }) => {
  return (
    <UserProvider>
      <TaskPageProvider>
        <StickyWallPageProvider>{children}</StickyWallPageProvider>
      </TaskPageProvider>
    </UserProvider>
  );
};

export default AppProviders;
