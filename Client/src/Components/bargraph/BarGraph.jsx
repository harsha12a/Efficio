import React from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarGraph = () => {
  const taskData = {
    Work: 5,
    Study: 3,
    Personal: 2,
    Exercise: 1,
  };

  const data = {
    labels: Object.keys(taskData), // X-axis labels
    datasets: [
      {
        label: 'Hours Spent',
        data: Object.values(taskData), // Y-axis data
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'], // Bar colors
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Legend position
      },
    },
    maintainAspectRatio: false, // Disable aspect ratio to control size
    scales: {
      x: {
        title: {
          display: true,
          text: 'Task Categories', // X-axis label
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Hours Spent', // Y-axis label
        },
      },
    },
  };

  return (
    <div style={{ width: '500px', height: '300px', margin: '0 auto' }}>
      {/* Container to control size */}
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarGraph;
