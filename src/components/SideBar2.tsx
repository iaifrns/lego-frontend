import HomeIcon from "../assets/icons/home";
import { primary } from "../constants/colors";
import { images } from "../constants/images";

const SideBar2 = ({
  setChangeSidebar,
}: {
  setChangeSidebar: (e: boolean) => void;
}) => {
  return (
    <div
      className="flex flex-col max-[992px]:-translate-x-full max-[992px]:w-0 max-[992px]:absolute max-[992px]:overflow-hidden transition-all ease-out"
      onMouseEnter={() => setChangeSidebar(true)}
    >
      <div className="h-17.5 py-4 px-5 flex justify-center items-center border border-lightb">
        <img src={images.ICONLOGO} alt="icon logo of sash" />
      </div>
      <div className="flex flex-col items-center py-4">
        <HomeIcon color={primary} h="24px" w="24px" />
      </div>
    </div>
  );
};

export default SideBar2;
