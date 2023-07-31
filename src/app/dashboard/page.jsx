"use client";
import "./style.css";
import { cardData, listData } from "./data";
import Card from "@/components/Card/Card";

import Analytics from "./Analytics/Analytics";
import List from "@/components/List/List";
import CardDashboard from "./Analytics/Card/Card";
import BarLoader from "./Analytics/BarLoader/BarLoader";

const DashBoard = () => {
  return (
    <div>
      <div className="card-container">
        {cardData?.map((card) => (
          <Card card={card}></Card>
        ))}
      </div>
      <div className="analytics">
        <div className="main">
          <Analytics />

          <CardDashboard />
          <div className="bar">
            <BarLoader />
          </div>
        </div>
        <div className="recent">
          <List title={"Recent Order"} listData={listData}></List>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
