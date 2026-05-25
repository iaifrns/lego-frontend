import CancelIcon from "../assets/icons/cancel";
import SettingIcon from "../assets/icons/setting";
import SidebarIcon from "../assets/icons/sidebar";
import { primary } from "../constants/colors";

const TopBar = ({
  changeSidebar,
  setChangeSidebar
}: {
  changeSidebar: boolean;
  setChangeSidebar: (e: boolean) => void;
}) => {
  const handleSidebarChange = () => setChangeSidebar(!changeSidebar);

  return (
    <div className="w-full h-17.5 flex items-center top-0 sticky px-8 justify-between shadow-sm">
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
      <div className="flex gap-4 items-center">
        <div className="flex flex-col items-center">
            <p className="font-semibold font-plex-sans">Nsini Franc</p>
            <p className="font-light font-plex-sans text-xs text-gray-700">Developper</p>
        </div>
        <SettingIcon style="animate-spin" color={primary} h="24px" w="24px" />
      </div>
    </div>
  );
};

export default TopBar;
