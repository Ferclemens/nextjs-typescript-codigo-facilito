import FetchApiNASA from "@/utils/FetchApi"
import { useRouter } from "next/router"
import { Image } from "@/types"

type ImageProps = {
    image : Image
}
type StaticParams = {
    params : any
}

const ImageDate = ({image}: ImageProps) => {
    //console.log(image);
    
    return (
        <div>
            <h3>{image.title}</h3>
            <img src={image.url} alt={image.title}/>
            <p>Date: {image.date}</p>
            <p>Description <br/>{image.explanation}</p>
        </div>
    )
}
export default ImageDate

export async function getStaticProps({ params }: StaticParams){
    
    const { date } = params

    try {
        const image = await FetchApiNASA(`&date=${date}`)
        //console.log(image);
        
        return{
            props : {image}
        }
    } catch (error) {
        console.log(error);
        
    }
}
//crea rutas dinamicas en el servidor segun se necesite (sin devolver toda la informacion desde el back -> Error: getStaticPaths is required for dynamic SSG pages)
export async function getStaticPaths(){
    try {
        return {
            paths:[],
            fallback: 'blocking'
        }
    } catch (error) {
        console.log(error);
        
    }

}
