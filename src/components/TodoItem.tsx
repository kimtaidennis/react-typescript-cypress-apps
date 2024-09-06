import { useContext } from "react"
import { StateDispatchContext } from "../context/all.context"
import { Actions, Todo } from "../reducer/types"

type Props = {
    todo: Todo,
}

const TodoItem = ({todo}: Props) => {
    const dispatch = useContext(StateDispatchContext)
    return (
        <div className="flex gap-2 md:gap-4 px-2 py-3 bg-slate-300 rounded-md">
            <input 
                type="checkbox" 
                checked={todo.complete} 
                onChange={ (e) => dispatch && dispatch({ type: Actions.COMPLETE_TODO, payload:{ id:todo.id,checked: e.target.checked}}) } 
            />
            <span style={{ textDecoration: `${todo.complete ? 'line-through': 'none'}`,color: `${todo.complete ? 'teal': 'inherit'}`}}>{ todo.name }</span> -
            <span 
                onClick={ () => dispatch && dispatch({ type: Actions.REMOVE_TODO, payload: todo.id }) } 
                className="cursor-pointer font-semibold"
            > X </span>
        </div>
    )
}

export default TodoItem