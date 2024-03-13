import Image from "next/image";

export default function Leftprops({img, text, color}){
    return(
        <div className="cursor-pointer">
            <h1 className="text-[19px] flex items-center gap-3" style={{color: color}}><Image src={img} alt='image'/> {text}</h1>
        </div>
    ) 
}