import Card from "@/components/Card/Card";
import React from "react";
import { cardData } from "./data";
import "./style.css";
const CardDashboard = () => {
  return (
    <div className="card-data">
      {cardData?.map((card) => (
        <div className="">
          <Card card={card} title_col={"#fff"}></Card>
        </div>
      ))}
    </div>
  );
};

export default CardDashboard;
