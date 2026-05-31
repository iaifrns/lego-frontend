import { getSetPArtDataUrl } from "../../../constants/endpoints"

export const getSetPartData = async (setData: (v: {
    year: [],
    sets: [],
    parts: [],
  }) => void) => {
    try{
        const response = await fetch(getSetPArtDataUrl)
        const result = await response.json()
        setData({
            year: result.data.map((d:any) => d._id),
            sets: result.data.map((d:any) => d.sets_count * 100),
            parts: result.data.map((d:any) => d.total_parts)
        })
    }catch(e){
        console.log(e)
    }
}