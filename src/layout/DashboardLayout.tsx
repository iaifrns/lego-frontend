import { useEffect, useState } from "react";
import { Outlet, useNavigation } from "react-router";
import SideBar from "../components/SideBar";
import SideBar2 from "../components/SideBar2";
import TopBar from "../components/TopBar";

const showAppropiateSidebar = (
  changeSidebar: boolean,
  hoverOnSidebar: boolean,
  isMobile: boolean,
  setHoverOnSidebar: (v: boolean) => void,
  setChangeSidebar: (v: boolean) => void,
) => {
  switch (true) {
    case isMobile:
      return (
        <div
          className={`${changeSidebar ? "absolute" : "hidden"} z-10 w-full h-full bg-black/15`}
          onClick={() => setChangeSidebar(false)}
        >
          <SideBar isHover />
        </div>
      );
    case hoverOnSidebar && changeSidebar:
      return <SideBar isHover setHoverLeave={setHoverOnSidebar} />;
    case changeSidebar:
      return <SideBar2 setChangeSidebar={setHoverOnSidebar} />;
    case !changeSidebar:
      return <SideBar />;
    default:
      return <SideBar />;
  }
};

const DashboardLayout = () => {
  const [changeSidebar, setChangeSidebar] = useState(false);
  const [hoverOnSidebar, setHoverOnSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setChangeSidebar(false);
    }
  }, [isMobile]);

  return (
    <div className="default-layout">
      {showAppropiateSidebar(
        changeSidebar,
        hoverOnSidebar,
        isMobile,
        setHoverOnSidebar,
        setChangeSidebar,
      )}
      <div className="w-full h-fit max-h-screen flex-2/3 overflow-y-scroll relative transition-all ease-in">
        <TopBar
          setChangeSidebar={setChangeSidebar}
          changeSidebar={changeSidebar}
        />
        <div className="bg-primary/10 flex flex-col">
          {isLoading && (
            <div className="flex justify-center items-center w-full h-screen font-bold text-2xl animate-bounce">
              Loading ...
            </div>
          )}
          {!isLoading && <Outlet />}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
