import { getAllSetsUrl } from "../../../constants/endpoints";

export const getAllSets = async (page: number, setSets: (n: []) => void) => {
  try {
    const response = await fetch(getAllSetsUrl + `?page=${page}&limit=15`);
    const result = await response.json();

    if (result.success) {
        console.log(result.data)
      setSets(result.data);
    }
  } catch (e) {
    console.log(e);
  }
};
