import "./search-panel.css";
import { useState } from "react";

const SearchPanel =(props)=>{
    const [term,setTerm]=useState('')
    const onUpdateSearch=(e)=>{
        const term=e.target.value;
        setTerm(term);
        props.onUpdateSearch(term);
    }

    return(
        <input 
            type="text"
            className="form-control search-input"
            placeholder="Найти сотрудника"
            value={term}
            onChange={onUpdateSearch} />
    )
}

export default SearchPanel;