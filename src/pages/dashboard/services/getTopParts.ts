import { getMostUsedPartUrl } from "../../../constants/endpoints"

export const getTopParts = async (setData:(v:[])=>void, setNum: (v:number) => void) => {
    try{
        const response = await fetch(getMostUsedPartUrl)
        const result = await response.json()

        if(result.success){
            console.log(result.data[0].grandTotal[0].totalParts)
            setData(result.data[0].topParts)
            setNum(result.data[0].grandTotal[0].totalParts)
        }
    }catch(e){
        console.log(e)
    }
}