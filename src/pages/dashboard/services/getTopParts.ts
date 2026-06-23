import { getMostUsedPartUrl } from "../../../constants/endpoints"

export const getTopParts = async () => {
    try{
        console.log(getMostUsedPartUrl)
        const response = await fetch(getMostUsedPartUrl)
        const result = await response.json()
        if(result.success){
            return [result.data[0].topParts,result.data[0].grandTotal[0].totalParts]
        }
    }catch(e){
        console.log(e)
    }
}