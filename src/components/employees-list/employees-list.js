import EmployeesListItem from "../employees-list-item/employees-list-item"
import "./employees-list.css"

const EmployeesList =({data, onDelete, onToggleIncrease,onToggleRise,onChangeSalary})=>{
    const elements=data.map((item)=>{
        let {id}=item;
        return(
        <EmployeesListItem 
            name={item.name} 
            salary={item.salary} 
            increase={item.increase}
            rise={item.rise} 
            key={id} 
            i={id}
            onDelete={()=>{onDelete(id)}}
            onToggleIncrease={()=> onToggleIncrease(id)}
            onToggleRise={()=>onToggleRise(id)}
            onChangeSalary={onChangeSalary}/>
        )
    })
    
    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;