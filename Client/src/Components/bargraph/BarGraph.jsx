import React from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarGraph = ({len}) => {
  const taskData = {
    Sat: len.length,
    Sun: 0,
    Mon: 0,
    Tue: 0,
    Wed: 0,
    Thu: 0,
    Fri: 0,
  };

  const data = {
    labels: Object.keys(taskData), // X-axis labels
    datasets: [
      {
        label: 'Tasks Completed',
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
          text: 'Week Days', // X-axis label
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Tasks Completed', // Y-axis label
        },
        ticks: {
          stepSize: 1, // Ensure Y-axis increments in whole numbers
        },
      },
    },
  };

  return (
    <div style={{ width: '400px', height: '300px', margin: '0 auto' }}>
      {/* Container to control size */}
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarGraph;
