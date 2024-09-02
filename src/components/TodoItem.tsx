
type Todo = {
    id: number,
    name: string,
    complete: boolean
}

type Props = {
    todo: Todo,
    remove: (id:number) => void,
    complete: (id:number,checked:boolean) => void,
}

const TodoItem = ({todo, remove, complete}: Props) => {
    return (
        <div className="flex gap-2 md:gap-4 px-2 py-3 bg-slate-300 rounded-md">
            <input type="checkbox" checked={todo.complete} onChange={ (e) => complete(todo.id,e.target.checked) } />
            <span style={{ textDecoration: `${todo.complete ? 'line-through': 'none'}`,color: `${todo.complete ? 'teal': 'inherit'}`}}>{ todo.name }</span> -
            <span onClick={ () => remove(todo.id) } className="cursor-pointer font-semibold"> X </span>
        </div>
    )
}

export default TodoItem