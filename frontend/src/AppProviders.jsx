import { CalendarPageProvider } from "./context/CalendarContext";
import { StickyWallPageProvider } from "./context/StickyWallContext";
import { TodayPageProvider } from "./context/TodayContext";

const AppProviders = ({ children }) => {
  return (
    <TodayPageProvider>
      <CalendarPageProvider>
        <StickyWallPageProvider>{children}</StickyWallPageProvider>
      </CalendarPageProvider>
    </TodayPageProvider>
  );
};

export default AppProviders;
