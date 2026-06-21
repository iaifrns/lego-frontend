import { useState } from "react";
import SendIcon from "../../assets/icons/send";
import { getCustomResult } from "./service/getCustomeResult";
import Loader2Icon from "../../assets/icons/loader2";
import DynamicTable from "./components/CustomTable";

const AdvanceSearchPage = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [data, setData] = useState<Record<string, any>[]>([]);

  const handleFetchData = async () => {
    if (message.length < 1) {
      alert("Please the search can't be empty");
      return;
    }
    const mes = message;
    setMessage("");
    setLoading(true);
    await getCustomResult(mes, setData);
    setLoading(false);
  };

  return (
    <div className="p-8 flex w-full flex-col justify-end h-[92vh] overflow-scroll">
      <div className="h-fit w-full flex flex-col pb-2 justify-en overflow-scroll">
        {loading ? (
          <div className="bg-gray-300 rounded-xl w-fit">
            <Loader2Icon w="40px" h="40px" color="black" />
          </div>
        ) : (
          <>{data && <>{data.length > 0 && <DynamicTable data={ data }/>}</>}</>
        )}
      </div>
      <div className="w-full bg-primary/10 border border-primary rounded-2xl flex flex-col p-2 gap-2">
        <textarea
          placeholder="enter text"
          className="border-0 w-full bg-transparent h-12 focus:outline-0 focus:ring-0"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="flex w-full justify-end">
          <div className="w-fit h-fit" onClick={handleFetchData}>
            <SendIcon
              w="24px"
              h="24px"
              style="cursor-pointer hover:scale-115"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvanceSearchPage;
