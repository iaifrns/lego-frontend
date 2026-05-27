export const generateRandomColors = (count: number) => {
    return Array.from({length: count}, () => {
        const r = Math.floor(Math.random()* 99)
        const g = Math.floor(Math.random()* 256)
        const b = Math.floor(Math.random()* 256)

        return `rgb(${r},${g},${b})`
    })
}