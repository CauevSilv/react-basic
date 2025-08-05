import './TextField.css';

const TextField = (props) => {

    const concatPlaceholder = props.placeholder + '...';

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input  placeholder={concatPlaceholder}/>
        </div>
    )
}

export default TextField;