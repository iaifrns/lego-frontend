import {
  getInventoryAndQuentityDataUrl,
  getInventoryGraphDataUrl,
  getLast8YearSetCountUrl,
  getPartCatCountUrl,
} from "../../../constants/endpoints";
import type { StatDataListType } from "../type";

const getLast8YearSetCount = async () => {
  let data = [];
  try {
    const response = await fetch(getLast8YearSetCountUrl);
    data = await response.json();
  } catch (e) {
    console.log(e);
  } finally {
    return data;
  }
};

const getPartCatData = async () => {
  let data = [];
  try {
    const response = await fetch(getPartCatCountUrl);
    data = await response.json();
  } catch (e) {
    console.log(e);
  } finally {
    return data;
  }
};

const getInventoryGraphData = async () => {
  let data = [];
  try {
    const response = await fetch(getInventoryGraphDataUrl);
    data = await response.json();
  } catch (e) {
    console.log(e);
  } finally {
    return data;
  }
};

const getInventoryAndQuentity = async () => {
  let data = [];
  try {
    const response = await fetch(getInventoryAndQuentityDataUrl);
    data = await response.json();
  } catch (e) {
    console.log(e);
  } finally {
    return data;
  }
};

export const getGraphData = async (setData: (v: StatDataListType) => void) => {
  const [setsData, partCatData, inventoryData, inventoryPartData] =
    await Promise.all([
      getLast8YearSetCount(),
      getPartCatData(),
      getInventoryGraphData(),
      getInventoryAndQuentity(),
    ]);
  let dataList: StatDataListType = {
    set: [],
    part: [],
    inventory: [],
    inventoryPart: [],
  };

  if (setsData.success) {
    dataList = {
      ...dataList,
      set: setsData.data.map((set: { _id: number; count: number }) => {
        return set.count;
      }),
    };
  }

  if (partCatData.success) {
    dataList = {
      ...dataList,
      part: partCatData.data.map((set: { _id: number; count: number }) => {
        return set.count;
      }),
    };
  }

  if (inventoryData.success) {
    dataList = {
      ...dataList,
      inventory: inventoryData.data.map(
        (set: { _id: number; count: number }) => {
          return set.count;
        },
      ),
    };
  }

  if (inventoryPartData.success) {
    dataList = {
      ...dataList,
      inventoryPart: inventoryPartData.data.map(
        (set: { _id: number; count: number }) => {
          return set.count;
        },
      ),
    };
  }

  setData(dataList);
};
