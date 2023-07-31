"use client";
import Image from "next/image";
import styles from "./Logo.module.css";
import LogoImage from "../../../public/static/Graph.png";
import { usePathname } from "next/navigation";
const Logo = () => {
  const pathname = usePathname();
  const path = pathname === "/conversation";
  return (
    <div className={styles.logo}>
      <Image src={LogoImage} alt="logo" width="40" />
      {!path && (
        <div>
          <h1 className={styles.header}>Metrix</h1>
        </div>
      )}
    </div>
  );
};

export default Logo;
