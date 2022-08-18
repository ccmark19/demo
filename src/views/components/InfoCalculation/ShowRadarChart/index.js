import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import styles from "./ShowChart.module.css";

const data = [
  {
    subject: "Math",
    A: 120,
    B: 110,
    fullMark: 100,
  },
  {
    subject: "Chinese",
    A: 98,
    B: 130,
    fullMark: 100,
  },
  {
    subject: "English",
    A: 86,
    B: 130,
    fullMark: 100,
  },
  {
    subject: "Geography",
    A: 99,
    B: 100,
    fullMark: 100,
  },
  {
    subject: "Physics",
    A: 85,
    B: 90,
    fullMark: 100,
  },
  {
    subject: "History",
    A: 65,
    B: 85,
    fullMark: 100,
  },
];

const ShowRadarChart = () => {
  //   static demoUrl = "https://codesandbox.io/s/simple-radar-chart-rjoc6";

  return (
    // <ResponsiveContainer width="100%" height="100%">
    <div
      style={{
        background: "#eef1f3",
        border: "none",
        borderRadius: "5px",
        paddingBlock: "1em",
      }}
    >
      <RadarChart
        width={300}
        height={300}
        cx="50%"
        cy="50%"
        outerRadius="80%"
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar
          name="Mike"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </div>
    // </ResponsiveContainer>
  );
};

export default ShowRadarChart;
