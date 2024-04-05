import React from 'react';
import BasicSparkLineCustomization from '../components/Charts/SparkLine';
import ArcDesign from '../components/Charts/Gauge';
import BarsDataset from '../components/Charts/Bar';
import LineAnimation from '../components/Charts/Line';
import Portfolio from '../components/Portfolio';
import PieChartWithCustomizedLabel from '../components/Charts/Pie';

const Dashboard = () => {
  return (
    <div className="container mx-auto py-20 px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="responsive-chart-container md:col-span-2">
          <div className="chart-bg bg-opacity-80 shadow-lg rounded-md h-auto flex items-center justify-center p-4">
            <div>
              <h1>Monthly Expenses and Savings</h1>
              <PieChartWithCustomizedLabel />
            </div>
          </div>
        </div>

        <div className="responsive-chart-container md:col-span-1 md:row-span-2">
          <div className="chart-bg bg-opacity-80 shadow-xl rounded-md h-auto flex items-center justify-center p-4">
            <div>
              <h1>Credit Score</h1>
              <ArcDesign />
            </div>
          </div>
        </div>

        <div className="responsive-chart-container md:col-span-1">
          <div className="chart-bg bg-opacity-80 shadow-xl rounded-md h-auto flex items-center justify-center p-4">
            <div className="w-full">
              <h1>Your Portfolio Valuation:</h1>
              <BasicSparkLineCustomization />
            </div>
          </div>
        </div>
        
        

        <div className="responsive-chart-container md:col-span-1 md:row-span-2">
          <div className="chart-bg bg-opacity-80 shadow-xl rounded-md h-auto flex items-center justify-center p-4">
            <div>
              <LineAnimation />
            </div>
          </div>
        </div>

        <div className="responsive-chart-container md:col-span-1">
          <div className="chart-bg bg-opacity-80 shadow-xl rounded-md h-auto flex items-center justify-center p-4">
            <div className="w-full">
              <h1>Portfolio:</h1>
              <Portfolio />
            </div>
          </div>
        </div>

        <div className="responsive-chart-container md:col-span-2">
          <div className="chart-bg bg-opacity-80 shadow-xl rounded-md h-auto flex items-center justify-center p-4">
            <div>
              <h1>Monthwise Savings, Expenditure and Investments :</h1>
              <BarsDataset />
            </div>
          </div>
        </div>
        
      </div>

      {/* Responsive CSS for overflow control and bento box styling */}
      <style jsx>{`
        .chart-bg {
          background-color: #101124;
          backdrop-filter: blur(5px);
        }
        @media (max-width: 768px) {
          .responsive-chart-container {
            overflow-x: auto;
          }
        }
        .shadow-lg {
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
        }
        .shadow-xl {
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </div>
  );
}

export default Dashboard;
