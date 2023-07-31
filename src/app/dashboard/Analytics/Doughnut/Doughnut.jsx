import React from "react";
import { CChart } from "@coreui/react-chartjs";
import Card from "@/components/Card/Card";
import "./style.css";
const labels = ["Acquisition", "Purchase", "Retention"];

const Doughnut = () => {
  return (
    <div className="">
      <Card title={"Marketting"}>
        <div className="labels">
          {labels.map((item) => (
            <div className="content">
              <span
                className="inner"
                style={{
                  backgroundColor:
                    item === "Acquisition"
                      ? "#5570F1"
                      : item === "Purchase"
                      ? "#97A5EB"
                      : "#FFCC91",
                }}
              ></span>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <CChart
          type="doughnut"
          style={{
            width: "205px",
            margin: "auto",
          }}
          data={{
            datasets: [
              {
                backgroundColor: ["#5570F1", "#FFCC91", "#97A5EB"],
                data: [50, 20, 20],
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                labels: {
                  color: "red",
                },
              },
            },
          }}
        />
      </Card>
    </div>
  );
};

export default Doughnut;
