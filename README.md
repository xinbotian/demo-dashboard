
## Overview

The **Demo Dashboard** is a web-based application designed to provide real-time insights into cryptocurrency prices, market trends, and portfolio management. The dashboard aggregates data from popular cryptocurrency APIs, allowing users to monitor their favorite cryptocurrencies, track price changes, and manage a demo portfolio with no real financial risk.

This project is intended as a demo to showcase the functionality of a modern cryptocurrency dashboard, including the integration of external APIs, data visualization, and responsive user interfaces.

## Features

- **Real-time Cryptocurrency Data**: Fetch live prices for major cryptocurrencies like Bitcoin (BTC), Ethereum (ETH), and others.
- **Price Charts**: Visualize historical price data with interactive line charts.
- **Portfolio Simulation**: Create a demo portfolio and simulate transactions (buy/sell) to track potential gains or losses.
- **Market Overview**: Display a list of top cryptocurrencies, their prices, and market caps.
- **Search Functionality**: Easily find specific cryptocurrencies by name or symbol.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Data Refresh**: Automatically update market data at regular intervals.

## Technology Stack

  - HTML, CSS, JavaScript
  - Framework: React.js 
  - Data Visualization: Chart.js or D3.js
  - Styling: Tailwind CSS 


- **Deployment**:
- 
  - Vercel for frontend hosting

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- npm or yarn (Node package manager)
- A free API key from a cryptocurrency data provider (optional but recommended for real-time data)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/username/crypto-demo-dashboard.git
   cd crypto-demo-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. (Optional) Set up environment variables for API keys:
   - Create a `.env` file in the root directory:
     ```
     REACT_APP_CRYPTO_API_KEY=your_api_key_here
     ```

4. Run the development server:
   ```bash
   npm start
   ```

   The dashboard will be available at `http://localhost:3000`.

### Building for Production

To create an optimized build for production:

```bash
npm run build
```

This will generate a `build/` directory with all necessary static files.

### Docker Setup

1. Build the Docker image:
   ```bash
   docker build -t crypto-demo-dashboard .
   ```

2. Run the Docker container:
   ```bash
   docker run -p 3000:3000 crypto-demo-dashboard
   ```

## Usage

- **Viewing Prices**: On the main dashboard, you can see the live price of selected cryptocurrencies. Click on any cryptocurrency to view detailed price charts.
- **Portfolio Simulation**: Add or remove cryptocurrencies from your portfolio to simulate buying or selling them at the current price.
- **Search Bar**: Use the search bar at the top of the page to find specific cryptocurrencies by name or symbol.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
