import { useState } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";



const App=(props) =>{
    const [data, setData]=useState([
        {name:'John C.', salary:800, increase:false,rise:false, id:1},
        {name:'Alex M.', salary:1200, increase:false,rise:false, id:2},
        {name:'Carl', salary:1600, increase:false,rise:false, id:3}
    ])
    console.log(data.length)
    const [term, setTerm]=useState('')
    const [filter, setFilter]=useState('all')
    let maxId=4;
    const deleteItem=(id)=>{
        setData(data=>data.filter(item=>item.id!==id))
    }
    const addItem=(item)=>{
        
        setData(data=>{
            let objClone = JSON.parse(JSON.stringify(data));
            objClone.push(item)
            maxId+=1;
            return objClone})
    }
    const onToggleIncrease=(id)=>{
        setData(data=>{
            return data.map(item=>{
                    if(item.id===id){
                        return{...item,increase:!item.increase}
                    }
                    return item;
                    })
        })
    }
    const onToggleRise=(id)=>{
        setData(data=>{
            return data.map(item=>{
                    if(item.id===id){
                        return{...item,rise:!item.rise}
                    }
                    return item;
                })
        })
    }
    const countIncrease=()=>{
        return data.filter(item=>item.increase).length;
    }

    const searchEmp=(items,term)=>{
        if(term===''){
            return items;
        }
        return items.filter(item=>item.name.indexOf(term)>-1)
    }
    const onUpdateSearch=(term)=>{
        setTerm(term)
    }
    const filterPost=(items,filter)=>{
        switch(filter){
            case 'rise':
                return items.filter(item=>item.rise)
            case 'moreThen1000':
                return items.filter(item=>item.salary>1000)
            default:
                return items
        }
    }
    const onFilterSelect=(filter)=>{
        setFilter(filter)
    }
    const onChangeSalary=(salary,id)=>{
        setData(data=>{
            return data.map(item=>{
                    if(item.id===id){
                        return{...item,salary:salary}
                    }
                    return item;
                }) 
        })
    }

    const visibleData=filterPost(searchEmp(data,term),filter)
    
    return(
        <div className="app">
            {console.log(data)}
            <AppInfo totalNumber={data.length} countIncrease={countIncrease}/>
            <div className="search-panel">
                <SearchPanel onUpdateSearch={onUpdateSearch}/>
                <AppFilter filter={filter} onFilterSelect={onFilterSelect}/>
            </div>
            <EmployeesList 
            data={visibleData} 
            onDelete={deleteItem}
            onToggleIncrease={onToggleIncrease}
            onToggleRise={onToggleRise}
            onChangeSalary={onChangeSalary}/>

            <EmployeesAddForm 
            onAddItem={addItem} 
            currId={maxId}/>
        </div>
    );
}

export default App;