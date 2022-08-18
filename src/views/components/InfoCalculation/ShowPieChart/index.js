import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";
import styles from "./ShowChart.module.css";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const ShowPieChart = () => {
  // static demoUrl = "https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o";

  return (
    <div style={{ height: "inherit" }}>
      <ResponsiveContainer width={400} height="100%">
        <PieChart
          // width={600}
          // height={300}
          className={(styles.container, styles.chartBg)}
        >
          <Legend layout="horizontal" verticalAlign="bottom" align="center" />
          <Pie
            data={data}
            // cx={120}
            // cy={200}
            fillOpacity={0.8}
            innerRadius={60}
            outerRadius={80}
            // fill="#8884d8"
            // paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          {/* <Pie
        data={data}
        cx={420}
        cy={200}
        startAngle={180}
        endAngle={0}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie> */}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ShowPieChart;
