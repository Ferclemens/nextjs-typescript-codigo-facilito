import { useRouter } from "next/router"
import { Image } from "@/types"

const ImageOfTheDay = ({url, title, date} : Image) => {
    const router = useRouter()
    return (
        <>
            <img src={url} onClick={() => router.push(`/image/${date}`)} />
            <h2>{title}</h2>
        </>
    )
}
export default ImageOfTheDay