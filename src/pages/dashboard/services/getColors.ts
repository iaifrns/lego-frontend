import { getAllColorsUrl } from "../../../constants/endpoints"

export const getColors = async (setColors: any) => {
    try{
        const response = await fetch(getAllColorsUrl)
        const data = await response.json()

        if(data.success){
            setColors(data.data)
        }
    }catch(e){
        console.log(e)
    }
}