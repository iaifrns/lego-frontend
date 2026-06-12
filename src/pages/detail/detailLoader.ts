import { getPromptDetailUrl } from "../../constants/endpoints"

export const detailGroqLoader = async () => {
    const response = await fetch(getPromptDetailUrl)

    return response.json()
}