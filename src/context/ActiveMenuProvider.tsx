import { createContext, useState, type ReactNode } from "react";
import { activeMenuData } from "../constants/active";
export const ActiveMenuContext = createContext({
  active: "",
  setActive: (_: string) => {},
});

const ActiveMenuProvider = ({children}: {children: ReactNode}) => {
  const [active, setActive] = useState(activeMenuData.DASHBOARD);

  return (
    <ActiveMenuContext.Provider
      value={{ active, setActive }}
    >
        {children}
    </ActiveMenuContext.Provider>
  );
};


export default ActiveMenuProvider