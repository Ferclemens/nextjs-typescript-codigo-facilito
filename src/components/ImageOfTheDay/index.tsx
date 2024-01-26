import { Image } from "@/types"

const ImageOfTheDay = ({url, title} : Image) => {
    return (
        <>
            <img src={url} />
            <h2>{title}</h2>
        </>
    )
}
export default ImageOfTheDay