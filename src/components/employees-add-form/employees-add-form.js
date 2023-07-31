import './employees-add-form.css'
import { useState } from 'react';

const EmployeesAddForm =(props)=>{
    
    const [name,setName]=useState('')
    const [salary,setSalary]=useState('')
    const onNameChange=(e)=>{
        setName(e.target.value)
    }
    const onSalaryChange=(e)=>{
        setSalary(e.target.value)
    }
    const{onAddItem,currId}=props;
    return(
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form className="add-form d-flex" onSubmit={(e)=>{
                    e.preventDefault();
                    if(name!==''&&salary!==''){
                    onAddItem({name:name, salary:salary, increase:false,rise:false, id:currId})}}}>
                <input type="text" 
                className="form-control new-post-label" 
                placeholder="Как его зовут?"
                name='name'
                value={name} 
                onChange={onNameChange}/>
                <input type="number" 
                className="form-control new-post-label" 
                placeholder="З/П в $??"
                name='salary'
                value={salary} 
                onChange={onSalaryChange}/>
                <button className="btn btn-outline-light"
                type='submit' 
                >Добавить</button>
            </form>
        </div>
    )
}
export default EmployeesAddForm;