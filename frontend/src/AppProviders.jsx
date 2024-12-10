import { CalendarPageProvider } from "./context/CalendarContext";
import { TodayPageProvider } from "./context/TodayContext";

const AppProviders = ({ children }) => {
  return (
    <TodayPageProvider>
      <CalendarPageProvider>{children}</CalendarPageProvider>
    </TodayPageProvider>
  );
};

export default AppProviders;
