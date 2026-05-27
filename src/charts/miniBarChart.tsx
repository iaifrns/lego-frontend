import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip
);

type MiniBarChartProps = {
  data: number[];
  color: string|string[],
  bcolor ?: string
};

export default function MiniBarChart({
  data, color, bcolor
}: MiniBarChartProps) {
  const chartData = {
    labels: data.map((_, i) => i),
    datasets: [
      {
        data,
        borderRadius: 4,
        barThickness: 6,
        backgroundColor: color,
        borderWidth: 1,
        borderColor: bcolor ? bcolor : color
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
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="w-24 h-16">
      <Bar
        data={chartData}
        options={options}
      />
    </div>
  );
}