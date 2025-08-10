import './Form.css';
import TextField from '../TextField';
import SelectList from '../SelectList';

const Form = () => {
    const times = [
        'Programming',
        'Front-end',
        'Data Science',
        'DevOps',
        'UX and Design',
        'Mobile',
        'Innovation and Management'
    ];
    return (
        <section className="form">
            <form>
                <h2>Fill in the details to create a card</h2>
                <TextField label="Name" placeholder="Text your name"/>
                <TextField label="Position" placeholder="Text your position"/>
                <TextField label="Image" placeholder="Load a image"/>
                <SelectList itens={times}/>
            </form>
        </section>
    )
}

export default Form;