import {useState, useContext} from 'react'
import {TaskContext} from '../Context/TaskContext'



function Taskform() {

 
  const  [title, setTitle] = useState("")
  const  [description, setDescription] = useState("")
  const {createTask} = useContext(TaskContext)

  

    const handleSubmit = (e) => {
        e.preventDefault();
       
        createTask({
            title,
            description,
        })
        setTitle('')
        setDescription('')
    }
  
    return (
        <div className='max-w-md mx-auto'>
        <form onSubmit={handleSubmit} className='bg-slate-900 p-10 mb-5 rounded-md'>
            <h1 className='text-2xl font-bold text-white mb-3 '>Crear Tareas</h1>
            <input placeholder="Escribe tu tarea"
           onChange={(e) => setTitle(e.target.value)}
           value={title}
           autoFocus 
           className='bg-slate-300 p-3 w-full mb-2'
            />
            <textarea placeholder='Escribe descripcion de la tarea' 
            onChange={(e)=> setDescription(e.target.value)}
            value={description}
            className='bg-slate-300 p-3 w-full mb-2'/>
            <button className='bg-indigo-500 px-3 py-1 text-white'>
                Gurdar
            </button>
        </form>
        </div>

  )
}

export default Taskform