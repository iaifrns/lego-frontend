import { getCustomeResultUrl } from "../../../constants/endpoints";
import type { BodyType } from "../../../types/body";

export const getCustomResult = async (
  message: string,
  setData: (v: []) => void,
  setCount: (v:number) => void,
  setBody: (v:BodyType)=>void
) => {
  try {
    const response = await fetch(getCustomeResultUrl + `?message=${message}`);
    const data = await response.json();
    if(data.success){
        setData(data.data);
        setCount(data.count);
        setBody({
            model: data.model,
            pipeline: data.pipeline
        })
    }else{
        alert("an error occured please try again later")
    }
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};
