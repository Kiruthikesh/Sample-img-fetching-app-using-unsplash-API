import { useState } from 'react';
import Searchbar from './searchbar'
import images from './Api'
import Image from './imageshow';



function App(){
    const [results,setResults]=useState([])
    const handleSubmit=async(search)=>{
        const result =await images(search);
        setResults(result.data.results);
    }

    return (
        <div>
        <Searchbar onSubmit={handleSubmit}/>
        <Image results={results}/>
        </div>
    )
}

export default App;