import { useContext, useState } from 'react'
import { StateDispatchContext } from '../context/all.context'
import { Actions } from '../reducer/types'

const TodoForm = () => {
    const[ value, setValue] = useState('')
    const dispatch = useContext(StateDispatchContext)
    
    const _addTodo = () => {
        if(dispatch) {
            dispatch({ type: Actions.ADD_TODO, payload: value})
        }
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