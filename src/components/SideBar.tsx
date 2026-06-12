import type { ReactNode } from "react";
import { images } from "../constants/images";
import HomeIcon from "../assets/icons/home";
import { defaultColor, primary } from "../constants/colors";
import InfoIcon from "../assets/icons/info";
import { useNavigate } from "react-router";

const Menu = ({
  text,
  icon,
  active,
  path,
}: {
  text: string;
  icon: ReactNode;
  active: boolean;
  path: string;
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex gap-2 items-center cursor-pointer"
      onClick={() => navigate(path)}
    >
      {icon}
      <p
        className={`font-medium font-plex-sans text-[15px] ${active && "text-primary"}`}
      >
        {text}
      </p>
    </div>
  );
};

const active: number = 1;

const SideBar = ({
  isHover = false,
  setHoverLeave,
}: {
  isHover?: boolean;
  setHoverLeave?: (v: boolean) => void;
}) => {
  return (
    <div
      className={`flex-1/3 max-w-75 flex flex-col max-[992px]:absolute max-[992px]:overflow-hidden transition-all duration-500 ease-in shadow-xl ${isHover ? "absolute z-10 bg-white w-full h-full" : "max-[992px]:-translate-x-full max-[992px]:w-0"}`}
      onMouseLeave={() => {
        if (setHoverLeave) {
          setHoverLeave(false);
        }
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="w-full h-17.5 py-4 px-5 flex justify-center items-center border border-lightb">
        <img src={images.LOGO} alt="full company logo" />
      </div>
      <div className="flex flex-col px-7 gap-3 py-2">
        <p className="text-subcolor text-xs font-plex-sans">MAIN</p>
        <Menu
          text="Dashboard"
          icon={<HomeIcon color={primary} h="1.3rem" w="1.3rem" />}
          active={active == 1}
          path="/"
        />
        <Menu
          text="Groq Details"
          icon={<InfoIcon color={defaultColor} h="1.3rem" w="1.3rem" />}
          active={active == 2}
          path="/groq_detail"
        />
      </div>
    </div>
  );
};

export default SideBar;
