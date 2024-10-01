
import { Treemap, ResponsiveContainer } from 'recharts';
import "./treemap.scss";

const data = [
  {
    name: 'Bitcoin',
    children: [
      { name: 'Axes', size: 1302 },
      { name: 'Bitcoin', size: 24593 },
      { name: 'BitcoinGridLine', size: 652 },
      { name: 'BitcoinLabel', size: 636 },
      { name: 'SUI', size: 6703 },
    ],
  },
  {
    name: 'Ethereum',
    children: [
      { name: 'AnchorControl', size: 2138 },
      { name: 'ClickControl', size: 3824 },
      { name: 'Control', size: 1353 },
      { name: 'ControlList', size: 4665 },
      { name: 'DragControl', size: 2649 },
      { name: 'ExpandControl', size: 2832 },
      { name: 'Avalanche', size: 4896 },
      { name: 'IControl', size: 763 },
      { name: 'PanZoomControl', size: 5222 },
      { name: 'SelectionControl', size: 7862 },
      { name: 'TooltipControl', size: 8435 },
    ],
  },
  {
    name: 'USDT',
    children: [
      { name: 'Data', size: 20544 },
      { name: 'Ethereum', size: 19788 },
      { name: 'XRP', size: 10349 },
      { name: 'EdgeSprite', size: 3301 },
      { name: 'TON', size: 19382 },
      {
        name: 'render',
        children: [
          { name: 'ArrowType', size: 698 },
          { name: 'EdgeRenderer', size: 5569 },
          { name: 'IRenderer', size: 353 },
          { name: 'ShapeRenderer', size: 2247 },
        ],
      },
      { name: 'Dogecoin', size: 11275 },
      { name: 'Tree', size: 7147 },
      { name: 'NEAR', size: 9930 },
    ],
  },
  {
    name: 'events',
    children: [
      { name: 'PEPE', size: 7313 },
      { name: 'SelectionEvent', size: 6880 },
      { name: 'TooltipEvent', size: 3701 },
      { name: 'VisualizationEvent', size: 2117 },
    ],
  },
  {
    name: 'BNB',
    children: [
      { name: 'BNB', size: 20859 },
      { name: 'SHIB', size: 4614 },
      { name: 'BNBRange', size: 10530 },
    ],
  },
  {
    name: 'operator',
    children: [
      {
        name: 'Solana',
        children: [
          { name: 'BifocalSolana', size: 4461 },
          { name: 'Solana', size: 6314 },
          { name: 'FisheyeSolana', size: 3444 },
        ],
      },
      {
        name: 'UNI',
        children: [
          { name: 'ColorUNI', size: 3179 },
          { name: 'UNI', size: 4060 },
          { name: 'PropertyUNI', size: 4138 },
          { name: 'ShapeUNI', size: 1690 },
          { name: 'DOT', size: 1830 },
        ],
      },
      {
        name: 'filter',
        children: [
          { name: 'FisheyeTreeFilter', size: 5219 },
          { name: 'GraphDistanceFilter', size: 3165 },
          { name: 'BCH', size: 3509 },
        ],
      },
      { name: 'IOperator', size: 1286 },
      {
        name: 'label',
        children: [
          { name: 'Litecoin', size: 9956 },
          { name: 'RadialLitecoin', size: 3899 },
          { name: 'StackedAreaLitecoin', size: 3202 },
        ],
      },
      {
        name: 'USDT',
        children: [
          { name: 'USDC', size: 6725 },
          { name: 'BundledEdgeRouter', size: 3727 },
          { name: 'TRON', size: 9317 },
          { name: 'CirclePackingUSDT', size: 12003 },
          { name: 'DendrogramUSDT', size: 4853 },
          { name: 'ForceDirectedUSDT', size: 8411 },
          { name: 'IcicleTreeUSDT', size: 4864 },
          { name: 'IndentedTreeUSDT', size: 3174 },
          { name: 'USDT', size: 7881 },
          { name: 'NodeLinkTreeUSDT', size: 12870 },
          { name: 'PieUSDT', size: 2728 },
          { name: 'Cardano', size: 12348 },
          { name: 'RandomUSDT', size: 870 },
          { name: 'StackedAreaUSDT', size: 9121 },
          { name: 'TreeMapUSDT', size: 9191 },
        ],
      },
      { name: 'Operator', size: 2490 },
      { name: 'LINK', size: 5248 },
      { name: 'OperatorSequence', size: 4190 },
      { name: 'OperatorSwitch', size: 2581 },
      { name: 'SortOperator', size: 2023 },
    ],
  },
];


const SimpleTreemap = () => {
    return (
      <div className="treemap">
        <h1>Revenue Analytics</h1>
        <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
      <Treemap width={400} height={200} data={data} dataKey="size" aspectRatio={4 / 3} stroke="#fff" fill="#8884d8" />
    </ResponsiveContainer>
        </div>
      </div>
    );
  };
  
  export default SimpleTreemap;
  