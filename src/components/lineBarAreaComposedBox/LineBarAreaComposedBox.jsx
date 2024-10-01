import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';
  import "./lineBarAreaComposedBox.scss";
  
  const data = [
    {
      name: 'Jan',
      Uniswap: 590,
      PancakeSwap: 800,
      Sushiswap: 1400,
      AAVE: 490,
    },
    {
      name: 'Feb',
      Uniswap: 868,
      PancakeSwap: 967,
      Sushiswap: 1506,
      AAVE: 590,
    },
    {
      name: 'Mar',
      Uniswap: 1397,
      PancakeSwap: 1098,
      Sushiswap: 989,
      AAVE: 350,
    },
    {
      name: 'Apr',
      Uniswap: 1480,
      PancakeSwap: 1200,
      Sushiswap: 1228,
      AAVE: 480,
    },
    {
      name: 'May',
      Uniswap: 1520,
      PancakeSwap: 1108,
      Sushiswap: 1100,
      AAVE: 460,
    },
    {
      name: '',
      Uniswap: 1400,
      PancakeSwap: 680,
      Sushiswap: 1700,
      AAVE: 380,
    },
  ];
  
  const LineBarAreaComposedBox = () => {
    return (
      <div className="lineBarAreaComposedBox">
        <h1>Cumulative Volume</h1>
        <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
                >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="Sushiswap" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="PancakeSwap" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="Uniswap" stroke="#ff7300" />
                <Scatter dataKey="AAVE" fill="red" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
      </div>
    );
  };
  
  export default LineBarAreaComposedBox;
  