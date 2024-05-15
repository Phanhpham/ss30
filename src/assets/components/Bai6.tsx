import React,{useState} from 'react'

export default function Bai6() {
    const [check,setCheck]=useState<Boolean>(false)
    const handleClick =()=>{
        setCheck(!check);
    };
  return (
    <div>Bai6
        {check ?
        ( <button onClick={handleClick}>an</button>
        ):( <button onClick={handleClick}>hien</button>
        )}
    </div>
  );
}
