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
    <>
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
          <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
            <>
              <stop offset="5%" stopColor="#59d0aa" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#59d0aa" stopOpacity={0} />
            </>
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis tickLine={false} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="price"
          stroke="#8884d8"
          fill="url(#colorPrice)"
        />
      </AreaChart>
      {/* </ResponsiveContainer> */}
    </>
  );
};

export default ShowAreaChart;
