import React,{useState} from 'react'

export default function Bai2() {
    const [value, setInputValue] = useState<string>('');

    const inputValue= (e:React.ChangeEvent<HTMLInputElement>)=>{
        setInputValue(e.target.value)
    }
      
  return (
    <div>
      <label>Du lieu dang nhap:{value}</label> <br/>
      <input type="text" onChange={inputValue}></input>
    </div>
  );
};
