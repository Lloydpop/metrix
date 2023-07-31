"use client";
import React from "react";
import "./style.css";
import { ChevronDown } from "react-iconly";
import Image from "next/image";
import Profile from "../../../public/static/profile.png";
import { HomeIcon, BellIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import { XMarkIcon } from "@heroicons/react/24/outline";
const Headers = ({ onClick, setSide, sidebar }) => {
  const pathname = usePathname();
  const path = pathname === "/conversation";
  return (
    <header className={`${!path ? "headers" : "headers conversation"}`}>
      <div>
        <h1 className="heading">{pathname.slice(1)}</h1>
        <div className="route">
          <HomeIcon className="icon-home" />
          {pathname !== "/dashboard" && <p>{`${pathname.slice(1)} /`}</p>}
        </div>
      </div>
      <div>
        <div className="profile">
          <div className={"profile bg"}>
            <p>Nanny's shop</p>
            <ChevronDown />
          </div>
          {sidebar === true ? (
            <XMarkIcon
              width={"30px"}
              color="#5570F1"
              className="ham-bugar"
              onClick={setSide}
            />
          ) : (
            <Bars3Icon
              width={"30px"}
              color="#5570F1"
              className="ham-bugar"
              onClick={setSide}
            />
          )}
          <span>
            <BellIcon className="icon" onClick={onClick} />
          </span>
          <div>
            <Image src={Profile} width={"45"} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headers;
