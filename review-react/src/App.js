import './App.css';
import { EjercicioComponent } from './components/EjercicioComponent';
import PropsTypes from 'prop-types'

function App() {
const date = new Date();
const year = date.getFullYear();

  return (
    <div className="App">
      <EjercicioComponent year={year}/>
    </div>
  );
}

export default App;

EjercicioComponent.PropsTypes = {
  year: PropsTypes.number.isRequired
}