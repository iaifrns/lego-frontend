import { getCustomeResultUrl } from "../../../constants/endpoints";

export const getCustomResult = async (message: string) => {
  try {
    const response = await fetch(getCustomeResultUrl + `?message=${message}`);
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};
