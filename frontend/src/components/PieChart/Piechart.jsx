import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './PieChart.css';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ completedTasks, totalTasks }) => {
  const data = {
    labels: ['Completed', 'Remaining'],
    datasets: [
      {
        data: [completedTasks, totalTasks - completedTasks],
        backgroundColor: ['#4caf50', '#ff4d4d'],
        hoverBackgroundColor: ['#66bb6a', '#ff6666'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="pie-chart">
      <h2>Progress</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;