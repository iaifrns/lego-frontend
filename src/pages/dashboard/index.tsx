import LegoIcon from "../../assets/icons/lego";
import LegoSetIcon from "../../assets/icons/legoSet";
import DoubleLineChart from "../../charts/areaChart";
import MiniBarChart from "../../charts/miniBarChart";
import MiniChart from "../../charts/miniLineChart";
import { images } from "../../constants/images";
import DashboardLayout from "../../layout/DashboardLayout";

const mockData = [
  {
    title: "Total USer",
    num: 45256,
    color: "rgb(5,195,251)",
    chart: (
      <MiniBarChart
        data={[12, 19, 8, 15, 22, 10, 17]}
        color={["rgb(5,195,251)", "rgb(5,195,251,0.2)"]}
        bcolor="rgb(5,195,251)"
      />
    ),
  },
  {
    title: "Total Profit",
    num: 45256,
    color: "rgb(236,130,239)",
    chart: (
      <MiniChart
        data={[10, 25, 15, 30, 20, 40, 35]}
        color={"rgb(236,130,239)"}
      />
    ),
  },
  {
    title: "Total Expenses",
    num: 45256,
    color: "#1dd871",
    chart: (
      <MiniBarChart data={[12, 19, 8, 15, 22, 10, 17]} color={"#1dd871"} />
    ),
  },
  {
    title: "Total Cost",
    num: 45256,
    color: "rgb(247,183,49)",
    chart: (
      <MiniChart
        data={[10, 25, 15, 30, 20, 40, 35]}
        color={"rgb(247,183,49)"}
      />
    ),
  },
];

const mockData2 = [
  {title: "Total Sets", desc: "Total number of lego sets", num: 45865, color: "bg-green-200", icon: LegoSetIcon},
  {title: "Total Parts", desc: "Total number of Parts", num: 10865, color: "bg-yellow-200", icon: LegoIcon},
]

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <div className="default-content">
        <p className="text-2xl font-bold">Dashboard</p>
        {/* the 4 box analysis display */}
        <div className="w-full grid grid-cols-4 max-[1400px]:grid-cols-2 max-[600px]:grid-cols-1 gap-6">
          {mockData.map((data, ind) => (
            <div
              className="p-8 bg-white rounded-lg flex justify-between items-center"
              key={ind + data.title}
            >
              <div className="flex flex-col gap-2">
                <p className="text-sm">{data.title}</p>
                <p className="font-bold text-2xl text-text-color">{data.num}</p>
                <p className="font-light text-xs text-gray-600">
                  <span style={{ color: data.color }}>5%</span> last week
                </p>
              </div>
              <div>{data.chart}</div>
            </div>
          ))}
        </div>
        <div className="flex w-full h-full gap-6">
          <div className="bg-white rounded-xl flex-3 flex flex-col">
            <div className="px-6 py-4 border-b border-gray-300">
              <p className="text-xl text-text-color font-semibold">Sales Analytics</p>
            </div>
            <div className="flex w-full pt-6 justify-center items-center gap-6">
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 rounded-full bg-[#3B82F6]"></div>
                <p className="text-sm">Total Sales</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 rounded-full bg-[#22C55E]"></div>
                <p className="text-sm">Total Revenue</p>
              </div>
            </div>
            <div className="p-6 w-full">
              <DoubleLineChart
                firstData={[10, 25, 15, 30, 20, 40]}
                secondData={[5, 15, 20, 18, 35, 30]}
              />
            </div>
          </div>
          <div className="flex-1 h-full rounded-xl flex flex-col bg-white">
            <div className="p-6 flex flex-col gap-4 rounded-t-xl bg-center bg-cover" style={{backgroundImage:`url(${images.BGIMG})`}}>
              <p className="text-white font-semibold">Popular Parts</p>

            </div>
            {mockData2.map((data, ind) => (
              <div className="p-6 flex w-full flex-col gap-4" key={ind+data.title}>
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${data.color}`}>
                  <data.icon w="24px" h="24px" />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold text-text-color">{data.title}</p>
                  <p className="font-light text-sm text-text-color">{data.desc}</p>
                </div>
                </div>
                <p className="font-bold text-xl text-text-color">{data.num}</p>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
