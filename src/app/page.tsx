'use client'
import Left from "@/components/leftSide/left";
import Middle from "@/components/middle/middle";
import Right from "@/components/right/right";


export default function Home() {
  return (
    <>
      <div className="flex w-[100%]">
        
      {/* left */}
        <div className="sidebar">
          <Left />
        </div>
        <div className="2xl:w-[63%] xl:w-[70%] base:w-[100%]">
          <Middle />
        </div>
        <div className="w-[30%] xl:flex mini:hidden"> 
          <Right rowId={'1'} rowid={'2'} /> 
        </div>
        
      </div>
    </>
  );
}
