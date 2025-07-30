import Banner from './componentes/Banner';

//When the js file is named index.js, you can import the folder directly
import TextField from './componentes/TextField';

function App() {
  return (
    <div className="App">
      <Banner />
      <TextField label="Name" placeholder="Text your name"/>
      <TextField label="Position" placeholder="Text your position"/>
      <TextField label="Image" placeholder="Load a image"/>
    </div>
  );
}

export default App;
