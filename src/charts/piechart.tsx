import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { generateRandomColors } from "../utils/generateColors";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

type PieChartProps = {
  data: number[];
  labels: string[];
};

export default function PieChart({
  data,
  labels,
}: PieChartProps) {
  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: generateRandomColors(data.length),
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
  };

  return (
    <div className="w-75 h-75">
      <Pie
        data={chartData}
        options={options}
      />
    </div>
  );
}