import React from 'react';
import {
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  DefaultLegendContent,
  ResponsiveContainer,
} from 'recharts';
  import "./bandedChart.scss";
  
  const data = [
    {
      name: "2024",
      a: [0, 0],
      Value: 0,
    },
    {
      name: "2025",
      a: [50, 300],
      Value: 106,
    },
    {
      name: "2026",
      a: [150, 423],
      Value: 237
    },
    {
      name: "2027",
      a: [250, 523],
      Value: 312,
    },
    {
      name: "2028",
      a: [367, 678],
      Value: 451,
    },
    {
      name: "2029",
      a: [305, 821],
      Value: 623,
    },
  ];
  
  const BandedChart= () => {
    const renderTooltipWithoutRange = ({ payload, content, ...rest }) => {
        const newPayload = payload.filter((x) => x.dataKey !== "a");
        return <Tooltip payload={newPayload} {...rest} />;
    }
  
    const renderLegendWithoutRange = ({ payload, content, ...rest }) => {
      const newPayload = payload.filter((x) => x.dataKey !== "a");
      return <DefaultLegendContent payload={newPayload} {...rest} />;
    }
    return (
      <div className="bandedChart">
        <h1>Expected Growth</h1>
        <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
      width={500}
      height={400}
      data={data}
      margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
      }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={renderTooltipWithoutRange} />
        <Area
            type="monotone"
            dataKey="a"
            stroke="none"
            fill="#cccccc"
            connectNulls
            dot={false}
            activeDot={false}
        />
        <Line type="natural" dataKey="Value" stroke="#ff00ff" connectNulls />
        <Legend content={renderLegendWithoutRange} />
      </ComposedChart>
    </ResponsiveContainer>
        </div>
      </div>
    );
  };
  
  export default BandedChart;
  