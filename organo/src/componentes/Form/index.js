import './form.css';
import TextField from '../TextField';

const Form = () => {
    return (
        <section className="form">
            <form>
                <h2>Fill in the details to create a card</h2>
                <TextField label="Name" placeholder="Text your name"/>
                <TextField label="Position" placeholder="Text your position"/>
                <TextField label="Image" placeholder="Load a image"/>
            </form>
        </section>
    )
}

export default Form;