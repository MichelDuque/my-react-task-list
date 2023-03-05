import Header from "./components/Header"
import TaskList from "./components/TaskList"

const listaTareas = [
  {id: 1, descripcion: 'cocinar'},
  {id: 2, descripcion: 'lavar'},
  {id: 3, descripcion: 'planchar'},
  {id: 4, descripcion: 'trapear'},
]

function App() {

  return (
    <div>
      <Header />

      <form action="">
        <input type="text" placeholder="Agrega nueva tarea" />
        <button>+</button>
      </form>

      <TaskList lista={listaTareas} />
    </div>
  )
}

export default App
