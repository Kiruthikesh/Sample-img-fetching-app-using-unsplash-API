import { useState } from "react";
import './Search.css'

function Searchbar({onSubmit}){
    
    const [search,setSearch]=useState('')

    const handleSubmit=(event)=>{
        event.preventDefault();
        onSubmit(search)
    }
    const handleChange=(event)=>{
        setSearch(event.target.value)
    }

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit} >
                Search: 
            <input className="inputbox" onChange={handleChange}/>
            </form>
            
        </div>
    )
}

export default Searchbar;