import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

type MiniChartProps = {
  data: number[];
  color: string
};

export default function MiniChart({
  data, color
}: MiniChartProps) {
  const chartData = {
    labels: data.map((_, i) => i),
    datasets: [
      {
        data,
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0,
        fill: false,
        borderColor: color,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <div className="w-24 h-16">
      <Line data={chartData} options={options} />
    </div>
  );
}