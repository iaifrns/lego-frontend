import { baseEndpointUrl } from "../../constants/endpoints";
import { getDataCounts } from "./services/countsData";
import { getGraphData } from "./services/getGraphData";
import { getSetPartData } from "./services/getSetsPartData";
import { getTopParts } from "./services/getTopParts";

export const dashboardLoader = async () => {
  console.log(baseEndpointUrl, import.meta.env.VITE_APP_ENV)
  const data = await Promise.all([
    getDataCounts(),
    getGraphData(),
    getSetPartData(),
    getTopParts(),
  ]);

  return data;
};
