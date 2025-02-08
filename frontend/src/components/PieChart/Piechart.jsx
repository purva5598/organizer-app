import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './PieChart.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ tasks }) => {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;

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

  return (
    <div className="pie-chart">
      <h2>Progress</h2>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;