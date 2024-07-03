import { Counter } from "./components/Counter"
import { Usuario } from "./components/Usuario";

import { TimerPadre } from "./components/TimerPadre";

import { ContadorRed } from "./components/ContadorRed";

import { Formulario } from "./components/Formulario";
import { Formulario2 } from './components/Formulario2';
import { Todo } from "./todo/Todo";

function App() {

  return (
    <>
      <h1 className="text-center mt-5">React + Typescript</h1>
      <div className="d-flex flex-column border mt-5 p-4">
        <h2>useState</h2>
        <Counter />
        <Usuario />
      </div>
      <div className="d-flex flex-column border mt-5 p-4">
        <h2>useEffect</h2>
        <TimerPadre />
      </div>
      <div className="d-flex flex-column border mt-5 p-4">
        <h2>useReducer</h2>
        <ContadorRed />
      </div>
      <div className="d-flex flex-column border mt-5 p-4">
        <h2>CustomHooks</h2>
        <Formulario />
        <Formulario2 />
      </div>
      <div className="d-flex flex-column border mt-5 p-4">
        <h2>To-Do:</h2>
        <Todo />
      </div>
    </>
  )
}

export default App
