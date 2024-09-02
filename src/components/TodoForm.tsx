import { useState } from 'react'

type Props = {
    onAdd: (str:string) => void
}

const TodoForm = ({ onAdd} :Props) => {
    const[ value, setValue] = useState('')
    
    const _addTodo = () => {
        onAdd(value)
        setValue('')
    }
    return (
        <div>
            <input 
                type="text" 
                value={value} 
                className="border border-slate-300 rounded-md p-2"
                onChange={ (e) => setValue(e.target.value)} 
            />
            <button 
                onClick={() => _addTodo() }
                className='text-white bg-[coral] px-2 py-2 rounded-md ml-2'
            >Add Todo</button>
        </div>
    )
}

export default TodoForm