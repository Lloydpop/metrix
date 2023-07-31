"use client";
import React from "react";
import { data } from "./NavData/Data";
import "./nav.css";
import { DevicePhoneMobileIcon, GiftIcon } from "@heroicons/react/24/outline";
import { ActiveLink } from "../Link/Link";
import { ArrowRightSquare, ChevronLeft, ChevronRight } from "react-iconly";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import Link from "next/link";
const NavBar = () => {
  const pathname = usePathname();
  const path = pathname === "/conversation";
  return (
    <div className={"navbar"}>
      {data.map((item) =>
        !path ? (
          <div className={"links"}>
            <ActiveLink href={item?.href}>
              <item.icon className={""} />
              <span>{item?.title}</span>
            </ActiveLink>
            {item.title === "conversations" ? (
              <span className={"tip"}>6</span>
            ) : item.title === "orders" ? (
              <span className={"tip"}>16</span>
            ) : null}
          </div>
        ) : (
          <Link href={item?.href} className="links mt">
            <item.icon />
          </Link>
        )
      )}
      {!path ? (
        <div className="nav-footer">
          <div className="contact">
            <DevicePhoneMobileIcon width={"20px"} />
            <p>Contact Support</p>
          </div>
          <div className=" gift">
            <div className="gift-child">
              <GiftIcon width={"20px"} />
              <h3>Free Gift Awaits you </h3>
            </div>
            <p className="upgrade">
              Upgrade your account <ChevronRight className="icon" />
            </p>
          </div>
          <div className="logout">
            <p>Logout</p>

            <ArrowRightOnRectangleIcon className="icon" />
          </div>
        </div>
      ) : (
        <div>
          <div className="nav-footer col">
            <DevicePhoneMobileIcon width={"20px"} />
            <GiftIcon width={"20px"} />
            <ArrowRightOnRectangleIcon width={"20px"} />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
