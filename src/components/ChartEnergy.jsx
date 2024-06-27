import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend, Title);

export default function ChartEnergy({energy, total}) {
  const data = {
    labels: ['Energía diaria', 'Energía faltante diaria'],
    datasets: [
      {
        label: 'Wh/día',
        data: [energy, total-energy],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Energía total demandada',
        position: 'top',
      },
    },
  };
  return (
    <div className="bg-white rounded-xl max-h-96 mt-4 mb-8 p-5 flex justify-center items-center">
      <Pie data={data} options={options} />
    </div>
  );
}