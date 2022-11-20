import TaskList from './Components/TaskList'
import Taskform from './Components/Taskform'


function App() {
  return (
    <main className='bg-red-900 h-screen'>
      <div className='container mx-auto'>
      <Taskform />
      <TaskList />
      </div>
    </main>
  )
}

export default App