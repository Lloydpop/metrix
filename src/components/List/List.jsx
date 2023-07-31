import React from "react";
import "./style.css";
import Image from "next/image";
import { Badge } from "../Badge/Badge";
import { Inter } from "next/font/google";

const inter = Inter({ weight: ["400", "500", "700"], subsets: ["latin"] });

const List = ({ title, listData }) => {
  return (
    <div className="container">
      <h1 className=".heading-g title2">{title}</h1>
      {listData?.map((list) => (
        <div className="content">
          <div>
            <div className="content-child">
              <Image src={list?.img} width={"49"} />
              <div>
                <p className="light">{list?.brand}</p>
                <p className="bold">{list?.price}</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className={`status ${inter.className}`}>
                <p>{list?.date}</p>
                <p>
                  <Badge status={list?.status}>{list?.status}</Badge>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
