import BarChartBox from "../../components/barChartBox/BarChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import ChartBox from "../../components/chartBox/ChartBox";
import LineBarAreaComposedBox from "../../components/lineBarAreaComposedBox/lineBarAreaComposedBox";
import BandedChart from "../../components/bandedChart/BandedChart";
import PieChartBox from "../../components/pieCartBox/PieChartBox";
import TwoLevelPieChart from "../../components/SpecifiedDomainRadarChart/SpecifiedDomainRadarChart";
import SimpleTreemap from "../../components/treemap/Treemap";
import {
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data";
import "./home.scss";
import SpecifiedDomainRadarChart from "../../components/SpecifiedDomainRadarChart/SpecifiedDomainRadarChart";

const Home = () => {
  return (
    <div className="home">
      <div className="box">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box boxlong">
        <BarChartBox />
      </div>
      <div className="box boxlong">
        <BigChartBox />
      </div>
      <div className="box boxlong">
        <LineBarAreaComposedBox/>
      </div>
      <div className="box boxlong">
        <BandedChart/>
      </div>
      <div className="box boxtall">
        <PieChartBox />
      </div>
      <div className="box boxtall">
        <SpecifiedDomainRadarChart />
      </div>
      <div className="box boxbig">
        <SimpleTreemap />
      </div>
    </div>
  );
};

export default Home;
