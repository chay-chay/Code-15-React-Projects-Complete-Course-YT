import React, { useState, useContext } from "react";
import sublinks from "./data";

export const AppContext = (React.createContext = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);

  const closeSidebar = () => {
    setIsSidebarOpen(true);
  };
  const openSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openSubmenu = () => {
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSubmenuOpen,
        isSidebarOpen,
        openSubmenu,
        openSidebar,
        closeSubmenu,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
});

// custom hook
export const useGlobalContext = () => {
    return useContext(AppContext)
}