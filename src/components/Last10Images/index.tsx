import { Image } from "@/types"

type Last10ImagesProps = {
    images : Image[]
}

const Last10Images = ({ images }: Last10ImagesProps) => {
    //console.log('images array', images)
    return (
        <div>
            {
                images?.map((image, index) => {
                    return  (
                        <div key={`last10Days-Key-${index}`}>
                            <img src={image.url} alt={image.title}/>
                            <h3>{image.title}</h3> 
                        </div>
                    )
                })
            }   
        </div>
    )
}
export default Last10Images
/* 
<div>
            {
                images?.map((image, index) => {
                    <div key={`last10Days-Key-${index}`}>
                        <img src={image.url} alt={image.title}/>
                        <h3>{image.title}</h3> 
                    </div>
                })
            }   
        </div> */