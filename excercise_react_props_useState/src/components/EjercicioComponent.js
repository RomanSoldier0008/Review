import React, {useState} from 'react'

export const EjercicioComponent = ({year}) => {

  const [yearNow, setYearNow] = useState(year);

  const nextYear = () =>{
    setYearNow(yearNow + 1);
  }
  const previousYear = () =>{
    setYearNow(yearNow - 1);
  }
  const changeYear = event => {
    let data = event.target.value /*Agarro el valor del evento que es la accion del elemento input en este caso, onchange*/
    data = parseInt(data) /*Convierto la variable data como de tipo entero para poder hacer la verificacion en el if*/
    if (Number.isInteger(data)){
      setYearNow(data);
    }
    else{
      setYearNow(year);
    }
  }

  return (
    <div>
        <h2>Ejercicio con eventos y UseState</h2>
        <strong>{yearNow}</strong>
        <button onClick={nextYear}>año siguiente</button>
        <button onClick={previousYear}>año anterior</button>
        <p>Cambiar año:
          <input type='text'
                 onChange={changeYear}
                 placeholder='Cambia el año'>

          </input>
        </p>
    </div>
  )
}
