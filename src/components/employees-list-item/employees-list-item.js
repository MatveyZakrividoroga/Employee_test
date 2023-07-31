import "./employees-list-item.css"

const EmployeesListItem =(props)=>{
    const {name,salary,onDelete,onToggleIncrease,onToggleRise,increase,rise,i,onChangeSalary}=props;

    let classNames="list-group-item d-flex justify-content-between";
    if(increase){
        classNames+=" increase"
    }
    if(rise){
        classNames+=" like"
    }
    

    return(
        <li className={classNames} >
            <span className="list-group-item-label" onClick={onToggleRise}>{name}</span>
            <input type="text" 
            className="list-group-item-input" 
            defaultValue={salary+'$'}
            onChange={(e)=>{onChangeSalary(+(e.target.value.slice(0, e.target.value.length - 1)),i)}} />
            <div className="d-flex justify-content-center align-items-center">
                <button type="button" 
                className="btn-cookie btn-sm" 
                onClick={onToggleIncrease}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button 
                className="btn-trash btn-sm" 
                type="button" 
                onClick={onDelete}>
                <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )

}
export default EmployeesListItem;