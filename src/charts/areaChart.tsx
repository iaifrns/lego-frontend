import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { primary, secondary } from "../constants/colors";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

type DoubleLineChartProps = {
  firstData: number[];
  secondData: number[];
};

export default function DoubleLineChart({
  firstData,
  secondData,
}: DoubleLineChartProps) {
  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Sales",
        data: firstData,
        borderColor: secondary,
        backgroundColor: secondary,
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        label: "Revenue",
        data: secondData,
        borderColor: primary,
        backgroundColor: "rgba(108,95,252,0.4)",
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
        fill: true
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // true if you want labels
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="w-full h-82">
      <Line
        data={chartData}
        options={options}
      />
    </div>
  );
}