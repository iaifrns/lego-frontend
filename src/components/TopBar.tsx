import CancelIcon from "../assets/icons/cancel";
import SidebarIcon from "../assets/icons/sidebar";
import { primary } from "../constants/colors";

const TopBar = ({
  changeSidebar,
  setChangeSidebar,
  isMobile
}: {
  changeSidebar: boolean;
  isMobile: boolean,
  setChangeSidebar: (e: boolean) => void;
}) => {
  const handleSidebarChange = () => setChangeSidebar(!changeSidebar);

  return (
    <div className="w-full h-17.5 flex items-center border top-0 sticky px-8 justify-between">
      <div>
        {changeSidebar ? (
          <div onClick={handleSidebarChange}>
            <CancelIcon color={primary} h="24px" w="24px" />
          </div>
        ) : (
          <div onClick={handleSidebarChange}>
            <SidebarIcon color={primary} h="24px" w="24px" />
          </div>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default TopBar;
