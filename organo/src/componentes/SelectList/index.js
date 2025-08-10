import './SelectList.css'

const SelectList = (props) => {
    console.log(props.itens)
    return (
        <div className="select-list">
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default SelectList