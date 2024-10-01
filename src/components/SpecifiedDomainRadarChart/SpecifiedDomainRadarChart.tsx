import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import "./specifiedDomainRadarChart.scss";

const data = [
  {
    subject: 'MATIC',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'ARB',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'OPT',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Base',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'ETH',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'MNT',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];


const SpecifiedDomainRadarChart = () => {
    return (
      <div className="specifiedDomainRadarChart">
        <h1>TVL by chain</h1>
        <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar name="Alice" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="Bob" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
        </div>
      </div>
    );
  };

  export default SpecifiedDomainRadarChart;
  