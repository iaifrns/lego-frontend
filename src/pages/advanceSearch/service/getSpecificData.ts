import { getSpecificDataUrl } from "../../../constants/endpoints";
import type { BodyType } from "../../../types/body";

export const getSpecificData = async (
  body: BodyType,
  page: number,
  setData: (v: any) => void,
  setLoading: (v: boolean) => void,
) => {
  try {
    setLoading(true);
    const response = await fetch(getSpecificDataUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...body, page: page }),
    });
    const data = await response.json();

    if (data.success) {
      setData(data.data);
    }
    setLoading(false);
  } catch (e) {
    console.log(e);
  }
};
