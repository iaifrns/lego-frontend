import DashboardLayout from "../../layout/DashboardLayout";

const mockData = [
  {
    title: "Total USer",
    num: 45256,
    color: 'rgb(5,195,251)'
  },
  {
    title: "Total Profit",
    num: 45256,
    color: 'rgb(236,130,239)'
  },
  {
    title: "Total Expenses",
    num: 45256,
    color: '#1dd871'
  },
  {
    title: "Total Cost",
    num: 45256,
    color: 'rgb(247,183,49)'
  },
];

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <div className="default-content">
        <p className="text-2xl font-bold">Dashboard</p>
        {/* the 4 box analysis display */}
        <div className="w-full grid grid-cols-4 gap-6">
          {mockData.map((data, ind) => (
            <div className="p-8 bg-white rounded-lg" key={ind + data.title}>
              <div className="flex flex-col gap-2">
                <p className="text-sm">{data.title}</p>
                <p className="font-bold text-2xl">{data.num}</p>
                <p className="font-light text-xs text-gray-600"><span style={{color:data.color}}>5%</span> last week</p>
              </div>
              <div></div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
