import Image, { StaticImageData } from "next/image";

export default function Leftprops({img, text, color}: {img: StaticImageData; text:string; color:string}){
    return(
        <div className="cursor-pointer">
            <h1 className="text-[19px] flex items-center gap-3" style={{color: color}}><Image src={img} alt='image'/> {text}</h1>
        </div>
    ) 
}