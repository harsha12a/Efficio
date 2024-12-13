import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Register components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const taskData = {
    Work: 5,
    Study: 3,
    Personal: 2,
  };

  const data = {
    labels: Object.keys(taskData), 
    datasets: [
      {
        label: 'Time Spent (hours)',
        data: Object.values(taskData),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    maintainAspectRatio: false, // Disable aspect ratio to control size
  };

  return (
    <div style={{ width: '300px', height: '300px', margin: '0 auto' }}>
      {/* Container to control size */}
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
