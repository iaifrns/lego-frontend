import { useEffect, useState } from "react";
import LegoIcon from "../../assets/icons/lego";
import LegoSetIcon from "../../assets/icons/legoSet";
import DoubleLineChart from "../../charts/areaChart";
import MiniBarChart from "../../charts/miniBarChart";
import MiniChart from "../../charts/miniLineChart";
import PieChart from "../../charts/piechart";
import { secondary } from "../../constants/colors";
import { images } from "../../constants/images";
import DashboardLayout from "../../layout/DashboardLayout";
import { getDataCounts } from "./services/countsData";
import { getGraphData } from "./services/getGraphData";
import type { CountType, StatDataListType } from "./type";
import { getSetPartData } from "./services/getSetsPartData";

const InitailCountData = {
  sets: {
    title: "Total Sets",
    num: 0,
    color: ["rgb(5,195,251)", "rgb(5,195,251,0.2)"],
    chart: MiniBarChart,
    desc: "pass 8 years",
  },
  parts: {
    title: "Total Parts",
    num: 0,
    color: "rgb(236,130,239)",
    chart: MiniChart,
    desc: "parts per parts categories",
  },
  inventories: {
    title: "Total Inventories",
    num: 0,
    color: "#1dd871",
    chart: MiniBarChart,
    desc: "inventories per set",
  },
  inventoryParts: {
    title: "Total Inventory_Parts",
    num: 0,
    color: "rgb(247,183,49)",
    chart: MiniChart,
    desc: "Invetories and quentities",
  },
};

const mockData2 = [
  {
    title: "Total Sets",
    desc: "Total number of lego sets",
    num: 45865,
    color: "bg-green-200",
    icon: LegoSetIcon,
  },
  {
    title: "Total Parts",
    desc: "Total number of Parts",
    num: 10865,
    color: "bg-yellow-200",
    icon: LegoIcon,
  },
];

const mockColors = [
  {
    id: -1,
    name: "Unknown",
    color: "#0033B2",
  },
  {
    id: 0,
    name: "Black",
    color: "#05131D",
  },
  {
    id: 1,
    name: "Blue",
    color: "#0055BF",
  },
  {
    id: 2,
    name: "Green",
    color: "#237841",
  },
  {
    id: 3,
    name: "Dark Turquoise",
    color: "#008F9B",
  },
  {
    id: 4,
    name: "Red",
    color: "#C91A09",
  },
  {
    id: 5,
    name: "Dark Pink",
    color: "#C870A0",
  },
  {
    id: 6,
    name: "Brown",
    color: "#583927",
  },
  {
    id: 7,
    name: "Light Gray",
    color: "#9BA19D",
  },
];

const mockParts = [
  {
    name: "Set 0687 Activity Booklet",
    number: Math.floor(Math.random() * 1000) + 1,
  },
  {
    name: "Baseplate 16 x 30 with Set 080 Yellow House Print",
    number: Math.floor(Math.random() * 1000) + 1,
  },
  {
    name: "Baseplate 16 x 24 with Set 080 Small White House Print",
    number: Math.floor(Math.random() * 10) + 1,
  },
  {
    name: "Baseplate 16 x 24 with Set 080 Red House Print",
    number: Math.floor(Math.random() * 100) + 1,
  },
  {
    name: "Baseplate 16 x 24 with Set 080 Large White House Print",
    number: Math.floor(Math.random() * 1000) + 1,
  },
  {
    name: "Homemaker Bookcase 2 x 4 x 4",
    number: Math.floor(Math.random() * 100) + 1,
  },
  {
    name: "Baseplate 24 x 32",
    number: Math.floor(Math.random() * 100) + 1,
  },
  {
    name: "Sticker Sheet #1 for 41055-1",
    number: Math.floor(Math.random() * 1000) + 1,
  },
  {
    name: "Sticker for Set 10019 - (43274/4170393)",
    number: Math.floor(Math.random() * 10) + 1,
  },
];

const mockSets = [
  {
    id: 1,
    name: "City Police Station",
    numberOfParts: 843,
    setNumber: "60246",
    themeName: "City",
    year: 2020,
  },
  {
    id: 2,
    name: "Fire Rescue Helicopter",
    numberOfParts: 325,
    setNumber: "60281",
    themeName: "City",
    year: 2021,
  },
  {
    id: 3,
    name: "Imperial Star Destroyer",
    numberOfParts: 4784,
    setNumber: "75252",
    themeName: "Star Wars",
    year: 2019,
  },
  {
    id: 4,
    name: "Hogwarts Castle",
    numberOfParts: 6020,
    setNumber: "71043",
    themeName: "Harry Potter",
    year: 2018,
  },
  {
    id: 5,
    name: "Technic Bugatti Chiron",
    numberOfParts: 3599,
    setNumber: "42083",
    themeName: "Technic",
    year: 2018,
  },
  {
    id: 6,
    name: "Ninjago Dragon Temple",
    numberOfParts: 765,
    setNumber: "71759",
    themeName: "Ninjago",
    year: 2022,
  },
  {
    id: 7,
    name: "Friends Heartlake Café",
    numberOfParts: 426,
    setNumber: "41426",
    themeName: "Friends",
    year: 2020,
  },
  {
    id: 8,
    name: "Creator Pirate Ship",
    numberOfParts: 1264,
    setNumber: "31109",
    themeName: "Creator",
    year: 2020,
  },
  {
    id: 9,
    name: "Speed Champions Ferrari F8",
    numberOfParts: 275,
    setNumber: "76895",
    themeName: "Speed Champions",
    year: 2020,
  },
  {
    id: 10,
    name: "Jurassic World T-Rex Escape",
    numberOfParts: 466,
    setNumber: "76944",
    themeName: "Jurassic World",
    year: 2022,
  },
  {
    id: 11,
    name: "Marvel Avengers Tower",
    numberOfParts: 5201,
    setNumber: "76269",
    themeName: "Marvel",
    year: 2023,
  },
  {
    id: 12,
    name: "Batman Batmobile",
    numberOfParts: 1360,
    setNumber: "76139",
    themeName: "DC",
    year: 2019,
  },
  {
    id: 13,
    name: "Minecraft The Village",
    numberOfParts: 1600,
    setNumber: "21128",
    themeName: "Minecraft",
    year: 2016,
  },
  {
    id: 14,
    name: "Disney Frozen Ice Castle",
    numberOfParts: 701,
    setNumber: "43197",
    themeName: "Disney",
    year: 2021,
  },
  {
    id: 15,
    name: "Architecture Statue of Liberty",
    numberOfParts: 1685,
    setNumber: "21042",
    themeName: "Architecture",
    year: 2018,
  },
  {
    id: 16,
    name: "Ideas Tree House",
    numberOfParts: 3036,
    setNumber: "21318",
    themeName: "Ideas",
    year: 2019,
  },
  {
    id: 17,
    name: "City Cargo Train",
    numberOfParts: 1226,
    setNumber: "60198",
    themeName: "City",
    year: 2018,
  },
  {
    id: 18,
    name: "Technic Lamborghini Sián",
    numberOfParts: 3696,
    setNumber: "42115",
    themeName: "Technic",
    year: 2020,
  },
  {
    id: 19,
    name: "Star Wars Millennium Falcon",
    numberOfParts: 7541,
    setNumber: "75192",
    themeName: "Star Wars",
    year: 2017,
  },
  {
    id: 20,
    name: "Creator Expert Bookshop",
    numberOfParts: 2504,
    setNumber: "10270",
    themeName: "Creator Expert",
    year: 2020,
  },
];

// Calculate total
const totalNumber = mockParts.reduce((sum, item) => sum + item.number, 0);

const DashboardPage = () => {
  const [loader, setLoading] = useState(false);
  const [countDataObj, setCountDataObj] = useState(InitailCountData);
  const [graphData, setGraphData] = useState({
    set: [],
    parts: [],
    invent: [],
    invPart: [],
  });
  const [dataAnalysis, setDataAnalysis] = useState({
    year: [],
    sets: [],
    parts: [],
  });

  const handleSetCount = (data: CountType) =>
    setCountDataObj({
      ...countDataObj,
      sets: { ...countDataObj.sets, num: data.sets },
      parts: { ...countDataObj.parts, num: data.parts },
      inventories: { ...countDataObj.inventories, num: data.inventory },
      inventoryParts: {
        ...countDataObj.inventoryParts,
        num: data.invenoryPart,
      },
    });

  const handleSetGraphData = (data: StatDataListType) => {
    setGraphData({
      ...graphData,
      set: data.set,
      parts: data.part,
      invent: data.inventory,
      invPart: data.inventoryPart,
    });
  };

  const handleDataAnalysis = (data: { year: []; sets: []; parts: [] }) => {
    setDataAnalysis({ year: data.year, sets: data.sets, parts: data.parts });
  };

  useEffect(() => {
    setLoading(true);
    Promise.all([
      getDataCounts(handleSetCount),
      getGraphData(handleSetGraphData),
      getSetPartData(handleDataAnalysis),
    ]).then(() => {
      setLoading(false);
    });
  }, []);

  if (loader) {
    return (
      <DashboardLayout>
        <div className="default-content">
          <p className="text-2xl font-bold text-text-color animate-pulse">
            Loading ...
          </p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="default-content">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-bold">Dashboard</p>
          <div className="flex gap-2 items-center text-[13.7px]">
            <p className="text-gray-400">Home</p>
            <p className="text-gray-400">/</p>
            <p className="text-primary">Dashboard</p>
          </div>
        </div>
        {/* the 4 box analysis display */}
        <div className="w-full grid grid-cols-4 max-[1400px]:grid-cols-2 max-[600px]:grid-cols-1 gap-6">
          {Object.values(countDataObj).map((data, ind) => (
            <div
              className="p-8 bg-white rounded-lg flex justify-between items-center shadow-xs"
              key={ind + data.title}
            >
              <div className="flex flex-col gap-2">
                <p className="text-sm">{data.title}</p>
                <p className="font-bold text-2xl text-text-color">{data.num}</p>
                <p className="font-light text-xs text-gray-600">{data.desc}</p>
              </div>
              <div>
                <data.chart
                  data={Object.values(graphData)[ind]}
                  color={data.color}
                  bcolor={data.color[0]}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-full h-full gap-6 max-[1400px]:flex-col">
          <div className="bg-white rounded-xl w-[70%] max-[1400px]:w-full flex flex-col shadow-xs">
            <div className="px-6 py-4 border-b border-gray-300">
              <p className="text-xl text-text-color font-semibold">
                Sets and Parts Analytics
              </p>
            </div>
            <div className="flex w-full pt-6 justify-center items-center gap-6">
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <p className="text-sm">Total Parts</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 rounded-full bg-secondary"></div>
                <p className="text-sm">Total Sets * 100</p>
              </div>
            </div>
            <div className="p-6 w-full">
              <DoubleLineChart
                firstData={dataAnalysis.sets}
                secondData={dataAnalysis.parts}
                label={dataAnalysis.year}
              />
            </div>
          </div>
          <div className="w-[30%] h-full max-[1400px]:w-full rounded-xl flex flex-col bg-white shadow-xs">
            <div
              className="p-6 pb-0 flex flex-col gap-4 rounded-t-xl bg-center bg-cover relative"
              style={{ backgroundImage: `url(${images.BGIMG})` }}
            >
              <p className="text-white font-semibold">Popular Parts</p>
              <MiniBarChart
                data={[12, 19, 8, 15, 22, 10, 17, 5]}
                color={secondary}
                style="w-full h-60"
              />
            </div>
            {mockData2.map((data, ind) => (
              <div
                className="p-6 flex w-full flex-col gap-4"
                key={ind + data.title}
              >
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${data.color}`}>
                      <data.icon w="24px" h="24px" />
                    </div>
                    <div className="flex flex-col">
                      <p className="font-semibold text-text-color">
                        {data.title}
                      </p>
                      <p className="font-light text-sm text-text-color">
                        {data.desc}
                      </p>
                    </div>
                  </div>
                  <p className="font-bold text-xl text-text-color">
                    {data.num}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full grid grid-cols-3 max-[1400px]:grid-cols-2 max-[992px]:grid-cols-1 gap-6">
          <div className="shadow-xs bg-white rounded-lg flex flex-col w-full h-fit">
            <div className="p-6 border-b border-gray-300">
              <p className="font-semibold text-text-color">Themes per Sets</p>
            </div>
            <div className="p-6 w-full flex justify-center">
              <PieChart
                labels={["Electronics", "Fashion", "Food", "Books"]}
                data={[35, 25, 20, 20]}
              />
            </div>
          </div>
          <div className="shadow-xs bg-white rounded-lg flex flex-col w-full h-fit">
            <div className="p-6 border-b border-gray-300">
              <p className="font-semibold text-text-color">Top 10 Colors</p>
            </div>
            <div className="p-6 flex flex-col gap-3">
              {mockColors.map((data, ind) => (
                <div
                  className="flex items-center justify-between"
                  key={ind + data.id}
                >
                  <div className="flex gap-2 items-center">
                    <div
                      className="w-10 h-10"
                      style={{ backgroundColor: data.color }}
                    ></div>
                    <div className="flex flex-col">
                      <p className="font-semibold text-text-color">
                        {data.name}
                      </p>
                      <p className="text-xs">code: {data.color}</p>
                    </div>
                  </div>
                  <p className="font-semibold text-sm text-text-color">
                    id: {data.id}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="shadow-xs bg-white rounded-lg flex flex-col w-full h-fit">
            <div className="p-6 border-b border-gray-300">
              <p className="font-semibold text-text-color">
                Top Parts in Lego Sets
              </p>
            </div>
            <div className="flex flex-col gap-3 p-6">
              {mockParts.map((data, ind) => (
                <div className="flex flex-col w-full" key={ind + data.name}>
                  <div className="w-full flex justify-between">
                    <p>{data.name}</p>
                    <div className="flex gap-1 items-center">
                      <p className="font-semibold">{data.number}</p>
                      <p className="text-sm text-primary">
                        ({((data.number / totalNumber) * 100).toFixed(2)}%)
                      </p>
                    </div>
                  </div>
                  <div className="relative w-full">
                    <div
                      className={`rounded-l-lg p-1 absolute bg-primary`}
                      style={{
                        width: `${Math.floor((data.number / totalNumber) * 100)}%`,
                      }}
                    ></div>
                    <div className="w-full rounded-lg p-1 bg-gray-200"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="shadow-xs bg-white rounded-xl flex flex-col w-full">
          <div className="p-6 border-b border-gray-300">
            <p className="font-semibold text-text-color">Sets Data</p>
          </div>
          <table className="text-center">
            <tr className="border-b border-gray-200 p-6">
              <th className="p-3">id</th>
              <th className="p-3">name</th>
              <th className="p-3">number of parts</th>
              <th className="p-3">set number</th>
              <th className="p-3">theme name</th>
              <th className="p-3">year</th>
            </tr>
            {mockSets.map((data, ind) => (
              <tr className="border-b border-b-gray-200" key={ind + data.id}>
                {Object.values(data).map((item, i) => (
                  <td className="p-3" key={`${item} ${i}`}>
                    {item}
                  </td>
                ))}
              </tr>
            ))}
          </table>
          <div className="p-6 flex justify-end">
            <div className="flex">
              <div className="py-2 px-4 cursor-pointer text-text-color rounded-l-md border border-gray-300 hover:text-primary">
                Prev
              </div>
              <div
                className="py-2 px-4 cursor-pointer text-white bg-primary border border-gray-300"
                hover:text-primary
              >
                1
              </div>
              <div className="py-2 px-4 cursor-pointer border border-gray-300 hover:text-primary">
                2
              </div>
              <div className="py-2 px-4 cursor-pointer text-text-color rounded-r-md border border-gray-300 hover:text-primary">
                Next
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
