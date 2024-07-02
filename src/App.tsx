import { Counter } from "./components/Counter"
import { Usuario } from "./components/Usuario";

import { TimerPadre } from "./components/TimerPadre";

function App() {

  return (
    <>
      <h1>React + Typescript</h1>
      <div className="d-flex flex-column border mt-5 p-4">
        <h2>useState</h2>
        <Counter />
        <Usuario />
      </div>
      <div className="d-flex flex-column border mt-5 p-4">
        <h2>useEffect</h2>
        <TimerPadre />
      </div>
    </>
  )
}

export default App
