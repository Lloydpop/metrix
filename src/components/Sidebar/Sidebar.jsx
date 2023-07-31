"use client";
import styles from "./sidebar.module.css";
import Logo from "../Logo/Logo";
import Headers from "../Headers/SidebarHeader";
import NavBar from "../NavBar/NavBar";
import { useState } from "react";
import NotificationSlider from "../NotificationSlider/NotificationSlider";
import { usePathname } from "next/navigation";
const Sidebar = () => {
  const [showNotification, setShowNotification] = useState(false);
  const pathname = usePathname();
  const [sidebar, setSidebar] = useState(false);
  const path = pathname === "/conversation";
  const handleNotificationClick = () => {
    setShowNotification(true);
  };
  const handleMenu = () => {
    if (sidebar === false) {
      setSidebar(true);
    } else {
      setSidebar(false);
    }
  };
  const handleCloseClick = () => {
    setShowNotification(false);
  };
  return (
    <div>
      <div
        className={`${
          !path
            ? `${styles.container} ${
                sidebar === true ? `${styles.active}` : ""
              }`
            : `${styles.conversations} ${
                sidebar === true ? `${styles.active}` : ""
              }`
        }`}
      >
        <Logo />
        <nav>
          <NavBar />
        </nav>
      </div>
      <Headers
        onClick={handleNotificationClick}
        setSide={handleMenu}
        sidebar={sidebar}
      />
      <NotificationSlider
        handleCloseClick={handleCloseClick}
        handleNotificationClick={handleNotificationClick}
        showNotification={showNotification}
      />
    </div>
  );
};
export default Sidebar;
