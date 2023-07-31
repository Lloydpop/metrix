import React, { useEffect, useState } from "react";
import "./style.css";
import { amount, date } from "./data";
import { ChevronDown } from "react-iconly";
const BarLoader = () => {
  const [width, setWidth] = useState(false);
  useEffect(() => {
    setWidth(true);
  }, [width]);
  return (
    <div className="contain">
      <div className="drop-container">
        <div className="flexer">
          <h1 className="heading">Summary</h1>
          <div className="flexer dropdown">
            <span>Sales</span>
            <ChevronDown className="icon" />
          </div>
        </div>
        <div className="flexer">
          <span>Last 70 days</span>
          <ChevronDown className="icon icon2" />
        </div>
      </div>
      <div className="grid-container">
        <div>
          {amount.map((item) => (
            <p className="amount">{item}</p>
          ))}
        </div>
        <div className="grid-container">
          {date.map((dat) => (
            <div>
              <span className="barchart">
                <span
                  className="inner2"
                  style={{
                    height: width === true ? dat?.width : "0%",
                  }}
                ></span>
              </span>
              <span className="date"> {dat?.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BarLoader;
