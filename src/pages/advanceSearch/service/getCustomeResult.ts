import { getCustomeResultUrl } from "../../../constants/endpoints";

export const getCustomResult = async (
  message: string,
  setData: (v: []) => void,
) => {
  try {
    const response = await fetch(getCustomeResultUrl + `?message=${message}`);
    const data = await response.json();
    if(data.success){
        setData(data.data);
    }else{
        alert("an error occured please try again later")
    }
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};
