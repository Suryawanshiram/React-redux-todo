
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <h2>React Redux Todo</h2>
      <div>
        <AddTodo />
        <Todos />
      </div>
    </>
  )
}

export default App
