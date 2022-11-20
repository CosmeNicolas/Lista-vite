import { createContext, useState, useEffect } from 'react' //creamos el contexto llamando desde react
import { tasks as data } from '../Data/tasks'

export const TaskContext = createContext()

export function TaskContextProvider(props) {

  const [tasks, setTasks] = useState([])

  function createTask(task) {
    setTasks([...tasks, {
      title: task.title,
      id: tasks.length,
      description: task.description
    }])
  }

  function deleteTask(taskid) {
    setTasks(tasks.filter(task => task.id !== taskid))

  }

  useEffect(() => {
    setTasks(data)
  }, [])


  return (
    <TaskContext.Provider value={{
      tasks,
      createTask,
      deleteTask,
    }}>

      {props.children}

    </TaskContext.Provider>
  )
}

