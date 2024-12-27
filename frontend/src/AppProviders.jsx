import { CalendarPageProvider } from "./context/CalendarContext";
import { StickyWallPageProvider } from "./context/StickyWallContext";
import { TodayPageProvider } from "./context/TodayContext";
import { UserProvider } from "./context/UserContext";

const AppProviders = ({ children }) => {
  return (
    <UserProvider>
      <TodayPageProvider>
        <CalendarPageProvider>
          <StickyWallPageProvider>{children}</StickyWallPageProvider>
        </CalendarPageProvider>
      </TodayPageProvider>
    </UserProvider>
  );
};

export default AppProviders;
