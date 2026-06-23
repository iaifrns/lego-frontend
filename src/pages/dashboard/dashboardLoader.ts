import { baseEndpointUrl } from "../../constants/endpoints";
import { getDataCounts } from "./services/countsData";
import { getGraphData } from "./services/getGraphData";
import { getSetPartData } from "./services/getSetsPartData";
import { getTopParts } from "./services/getTopParts";

export const dashboardLoader = async () => {
  console.log(baseEndpointUrl)
  const data = await Promise.all([
    getDataCounts(),
    getGraphData(),
    getSetPartData(),
    getTopParts(),
  ]);

  return data;
};
