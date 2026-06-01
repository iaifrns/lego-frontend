import { getAllColorsUrl } from "../../../constants/endpoints"

export const getColors = async (setColors: any, page:number) => {
    try{
        const response = await fetch(getAllColorsUrl + `?page=${page}&limit=10`)
        const data = await response.json()

        if(data.success){
            setColors(data.data)
        }
    }catch(e){
        console.log(e)
    }
}