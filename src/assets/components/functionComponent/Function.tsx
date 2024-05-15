import React ,{useState}from 'react'


export default function Function() {

    const [name,setName]=useState<string>("hoa");
    /*
    event:su kien 
    onclick
    onchange
    oninput
    onkeydown
    onkeyup
    .....
    */
   // noi khai bao cac ham 
   // dung cac tu khoa khai bao :let const var
   const handleChange=()=>{
    console.log("da goi vao ham handleChange");
    // di xu ly 
    // khi muon cap nhat state(name)
    setName("hong");
    // khi setName thi component re-render lai 1 lan 
   }
  return (
    <div>Function
        <p>{name}</p>
        <button onClick= {handleChange}>click</button>
    </div>
  )
}
