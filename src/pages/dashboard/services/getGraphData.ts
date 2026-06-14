import {
  getInventoryAndQuentityDataUrl,
  getInventoryGraphDataUrl,
  getLast8YearSetCountUrl,
  getPartCatCountUrl,
  themeBarDataurl,
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

const getThemeBarData = async () => {
  let data = [];
  try {
    const response = await fetch(themeBarDataurl);
    const result = await response.json();

    if (result.success) {
      data = result.data;
    }
  } catch (e) {
    console.log(e);
  } finally {
    return data;
  }
};

export const getGraphData = async () => {
  const [
    setsData,
    partCatData,
    inventoryData,
    inventoryPartData,
    themeBarData,
  ] = await Promise.all([
    getLast8YearSetCount(),
    getPartCatData(),
    getInventoryGraphData(),
    getInventoryAndQuentity(),
    getThemeBarData(),
  ]);
  let dataList: StatDataListType = {
    set: [],
    part: [],
    inventory: [],
    inventoryPart: [],
    theme: [],
    pieTheme: [],
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

  dataList = {
    ...dataList,
    theme: themeBarData.slice(10).map((set: { _id: number; count: number }) => {
      return set.count;
    }),
    pieTheme: themeBarData,
  };

  return dataList;
};
