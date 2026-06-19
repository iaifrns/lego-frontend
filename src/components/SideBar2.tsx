import { useContext } from "react";
import HomeIcon from "../assets/icons/home";
import InfoIcon from "../assets/icons/info";
import { defaultColor, primary } from "../constants/colors";
import { images } from "../constants/images";
import { ActiveMenuContext } from "../context/ActiveMenuProvider";
import { activeMenuData } from "../constants/active";
import { useNavigate } from "react-router";
import AdvanceIcon from "../assets/icons/advance";

const SideBar2 = ({
  setChangeSidebar,
}: {
  setChangeSidebar: (e: boolean) => void;
}) => {
  const { active, setActive } = useContext(ActiveMenuContext);
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col max-[992px]:-translate-x-full max-[992px]:w-0 max-[992px]:absolute max-[992px]:overflow-hidden transition-all ease-out shadow-xl"
      onMouseEnter={() => setChangeSidebar(true)}
    >
      <div className="h-17.5 py-4 px-5 flex justify-center items-center border border-lightb">
        <img src={images.ICONLOGO} alt="icon logo of sash" />
      </div>
      <div className="flex flex-col items-center py-4 gap-4">
        <div
          onClick={() => {
            setActive(activeMenuData.DASHBOARD);
            navigate("/");
          }}
        >
          <HomeIcon
            color={active === activeMenuData.DASHBOARD ? primary : defaultColor}
            h="24px"
            w="24px"
          />
        </div>
        <div
          onClick={() => {
            setActive(activeMenuData.GROQDETAIL);
            navigate("/groq_detail");
          }}
        >
          <InfoIcon
            color={
              active === activeMenuData.GROQDETAIL ? primary : defaultColor
            }
            h="1.3rem"
            w="1.3rem"
          />
        </div>
        <AdvanceIcon
          color={
            active === activeMenuData.ADVANCESEARCH ? primary : defaultColor
          }
          h="1.3rem"
          w="1.3rem"
        />
      </div>
    </div>
  );
};

export default SideBar2;
