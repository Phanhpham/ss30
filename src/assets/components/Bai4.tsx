import React,{useState} from 'react'

export default function Bai4() {
    const [selectedCity, setSelectedCity] = useState('');

    const handleSelect= (e:React.ChangeEvent<HTMLSelectElement>)=>{
        setSelectedCity(e.target.value)
    }
   
  return (
    <div>
        
      <label>TINH /THANH PHO:{selectedCity}</label> <br/>
      <select name=""onChange={handleSelect}>
        <option value ="">chon tinh/thanhpho</option>
        <option value="ha noi">HA NOI</option>
        <option value="hai phong">HAi phong</option>
        <option value="nghe an">nghe an</option>
        <option value="da nang">da nang</option>
        <option value="nam dinh">nam dinh</option>

      </select>
    </div>
  );
};
