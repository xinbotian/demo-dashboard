
import "./barChartBox.scss";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Jan',
    USDT: 4000,
    USDC: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    USDT: -3000,
    USDC: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    USDT: -2000,
    USDC: -9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    USDT: 2780,
    USDC: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    USDT: -1890,
    USDC: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    USDT: 2390,
    USDC: -3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    USDT: 3490,
    USDC: 4300,
    amt: 2100,
  },
];

const BarChartBox = () => {
  return (
    <div className="barChartBox">
      <h1> Net Flows</h1>
      <div className="chart">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="USDT" fill="#8884d8" />
          <Bar dataKey="USDC" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;