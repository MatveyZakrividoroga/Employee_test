import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";



class App extends Component{
    constructor(props){
        super(props)
        this.state={
            data:[
                {name:'John C.', salary:800, increase:false,rise:false, id:1},
                {name:'Alex M.', salary:1200, increase:false,rise:false, id:2},
                {name:'Carl', salary:1600, increase:false,rise:false, id:3}
            ],
            term:'',
            filter:'all'
        }
        this.maxId=4;
       
    }
    deleteItem=(id)=>{
        this.setState(({data})=>{
            return{
                data:data.filter(item=>item.id!==id)
            }
        })
    }
    addItem=(item)=>{
        this.setState(({data})=>{
            let objClone = JSON.parse(JSON.stringify(data));
            objClone.push(item)
            this.maxId+=1;
            return{
                data:objClone
            }
        })
    }
    onToggleIncrease=(id)=>{
        this.setState(({data})=>({ 
            data:data.map(item=>{
                if(item.id===id){
                    return{...item,increase:!item.increase}
                }
                return item;
            })
        }))
    }
    onToggleRise=(id)=>{
        this.setState(({data})=>({ 
            data:data.map(item=>{
                if(item.id===id){
                    return{...item,rise:!item.rise}
                }
                return item;
            })  
        }))
    }
    countIncrease=()=>{
        let i=0;
        this.state.data.forEach(item=>{
            if(item.increase){
                i++
            }
        })
        return i;
    }

    searchEmp=(items,term)=>{
        if(term===''){
            return items;
        }
        return items.filter(item=>item.name.indexOf(term)>-1)
    }
    onUpdateSearch=(term)=>{
        this.setState({term});
    }
    filterPost=(items,filter)=>{
        switch(filter){
            case 'rise':
                return items.filter(item=>item.rise)
            case 'moreThen1000':
                return items.filter(item=>item.salary>1000)
            default:
                return items
        }
    }
    onFilterSelect=(filter)=>{
        this.setState({filter})
    }
    onChangeSalary=(salary,id)=>{
        this.setState(({data})=>({ 
            data:data.map(item=>{
                if(item.id===id){
                    return{...item,salary:salary}
                }
                return item;
            })  
        }))
    }
    render(){
        const {term,data,filter}=this.state;
        const visibleData=this.filterPost(this.searchEmp(data,term),filter)
        
        return(
            <div className="app">
                <AppInfo totalNumber={data.length} countIncrease={this.countIncrease}/>
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
                <EmployeesList 
                data={visibleData} 
                onDelete={this.deleteItem}
                onToggleIncrease={this.onToggleIncrease}
                onToggleRise={this.onToggleRise}
                onChangeSalary={this.onChangeSalary}/>

                <EmployeesAddForm 
                onAddItem={this.addItem} 
                currId={this.maxId}/>
            </div>
        );
    }
}

export default App;