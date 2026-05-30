import {
  countInventoryPartUrl,
  countInventoryUrl,
  countPartUrl,
  countSetsUrl,
} from "../../../constants/endpoints";
import type { CountType } from "../type";

export const setCount = async () => {
  let num: number = 0;
  try {
    const response = await fetch(countSetsUrl);
    const data = await response.json();
    console.log(data);
    num = data.count;
  } catch (e) {
    console.log(e);
  } finally {
    return num;
  }
};

export const partCount = async () => {
  let num: number = 0;
  try {
    await fetch(countPartUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          num = data.count;
        }
      });
  } catch (e) {
    console.log(e);
  } finally {
    return num;
  }
};

export const inventoryCount = async () => {
  let num: number = 0;
  try {
    await fetch(countInventoryUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          num = data.count;
        }
      });
  } catch (e) {
    console.log(e);
  } finally {
    return num;
  }
};

export const inventoryPartCount = async () => {
  let num: number = 0;
  try {
    await fetch(countInventoryPartUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          num = data.count;
        }
      });
  } catch (e) {
    console.log(e);
  } finally {
    return num;
  }
};

export const getDataCounts = async (
  handleSetCount: (v: CountType) => void,
) => {
  let count = { sets: 0, parts: 0, inventory: 0, invenoryPart: 0 };
  Promise.all([
    setCount(),
    partCount(),
    inventoryCount(),
    inventoryPartCount(),
  ]).then((data) => {
    count.sets = data[0];
    count.parts = data[1];
    count.inventory = data[2];
    count.invenoryPart = data[3];
    handleSetCount(count);
  });
};
