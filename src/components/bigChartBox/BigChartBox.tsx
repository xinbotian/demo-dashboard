import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./bigChartBox.scss";

const data = [
  {
    name: "Jan",
    BTC: 4000,
    ETH: 2400,
    USDT: 2400,
  },
  {
    name: "Feb",
    BTC: 3000,
    ETH: 1398,
    USDT: 2210,
  },
  {
    name: "Mar",
    BTC: 2000,
    ETH: 9800,
    USDT: 2290,
  },
  {
    name: "Apr",
    BTC: 2780,
    ETH: 3908,
    USDT: 2000,
  },
  {
    name: "May",
    BTC: 1890,
    ETH: 4800,
    USDT: 2181,
  },
  {
    name: "Jun",
    BTC: 2390,
    ETH: 3800,
    USDT: 2500,
  },
  {
    name: "Jul",
    BTC: 3490,
    ETH: 4300,
    USDT: 2100,
  },
];

const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>Total value locked</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="USDT"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="ETH"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="BTC"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
