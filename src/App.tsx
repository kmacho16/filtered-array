import React, { useEffect, useState } from 'react';
import './App.css';

type Nba = {
  first_name:string;
  h_in: number;
  h_meters: string;
  last_name: string;
}

function App() {
  const [data, setData] = useState<Nba[]>([]);
  const [inputHeight, setInputHeight] = useState<number>()
  const [filteredData, setFilteredData] = useState(new Set<string>())
   
  useEffect(()=>{
    getData().then((data)=>setData(data.values as Nba[]));
  },[])

  const search = () =>{
    setFilteredData(new Set())
    filteredData.clear()
    const input = inputHeight!;
    const mData:Array<Nba> = data;
    for(let a of mData){
      let LookUp = input - a.h_in;
      let filtered = mData.find(i=>i.h_in===LookUp);
      if(filtered && filtered!==a){
        if(a.first_name>filtered.first_name){
          setFilteredData(prev=>new Set(prev.add(`${a.first_name} ${a.last_name} | ${filtered!.first_name} ${filtered!.last_name}`)))
        }else{
          setFilteredData(prev=>new Set(prev.add(`${filtered!.first_name} ${filtered!.last_name} | ${a.first_name} ${a.last_name}`)))
        }
      } 
    }
  }

  const getData = async() =>{
    const data = await fetch("https://mach-eight.uc.r.appspot.com/");
    return await data.json();
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Please type the height sum to look for:  
          <input type="number" onChange={(e)=>{
            setInputHeight(Number(e.target.value));
          }}/>
        </p>
        <button className='btn-search' onClick={search}>Search</button>
        <h4>Total {filteredData.size}</h4>
        <div className='names'>
          {Array.from(filteredData).map(e=>(<><code>{e}</code><br/></>))}
        </div>
      </header>
    </div>
  );
}

export default App;
