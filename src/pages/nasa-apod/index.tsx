import ImageOfTheDay from "@/components/ImageOfTheDay"
import Last10Images from "@/components/Last10Images"
import { NasaApodProps} from "@/types"
import FetchApiNASA from "@/utils/FetchApi"


export default function NasaApod({imageOfTheDay, last10Images}: NasaApodProps) {
    //console.log('Image of the day', imageOfTheDay)
    //console.log('Last 10 Images', last10Images)
    return (
        <>
            <h1>NASA - Astronomy Picture of the Day</h1>
            <ImageOfTheDay {...imageOfTheDay}/>
            <Last10Images images = {last10Images}/>
        </>
    )
}

export async function getServerSideProps(){
    try {
        const imageOfTheDay = await FetchApiNASA()
        const last10Images = await FetchApiNASA('&start_date=2024-01-15&end_date=2024-01-24')
        //console.log(last10Images)
        //console.log(imageOfTheDay)
        return {
            props : {
                imageOfTheDay,
                last10Images,
            }
        }
    } catch (error) {
        return console.log('NasaApod ERROR to fetch -> ',error)        
    }
}