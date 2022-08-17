import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ShowAreaChart = ({ data }) => {
  return (
    <div
      style={{
        background: "#eef1f3",
        border: "none",
        borderRadius: "5px",
        paddingBlock: "1em",
      }}
    >
      {/* <ResponsiveContainer width="100%" height="400px"> */}
      <AreaChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <CartesianGrid
          stroke="#ccc"
          strokeDasharray="5 5"
          horizontal={false}
          vertical={false}
        />
        <defs>
          <linearGradient id="price" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="quantity" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="cost" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#FFA500" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#FFA500" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis tickLine={false} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="price"
          stroke="#8884d8"
          // fillOpacity={1}
          fill="url(#price)"
        />
        <Area
          type="monotone"
          dataKey="quantity"
          stroke="#82ca9d"
          // fillOpacity={1}
          fill="url(#quantity)"
        />
        <Area
          type="monotone"
          dataKey="cost"
          stroke="#FFA500"
          // fillOpacity={1}
          fill="url(#cost)"
        />
      </AreaChart>
      {/* </ResponsiveContainer> */}
    </div>
  );
};

export default ShowAreaChart;
