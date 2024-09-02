import { useEffect, useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { useApp } from './context'
import { Actions } from './reducer/types'
import Header from './components/Header'

type Todo = {
  id: number,
  name: string,
  complete: boolean
}

function App() {

  const [todos,setTodos] = useState<Todo[]>([])
  const { state: { posts },dispatch} = useApp()

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => dispatch({ type: Actions.ADD_POST,payload:res}));
  }, []);

  const addTodo = (todo: string) => {
    let obj: Todo = {
      id: todos.length + 1,
      name: todo,
      complete: false
    }
    setTodos([...todos,obj])
  }

  const onRemove = (id:number) => {
    let t = todos.filter( (todo) => todo.id !== id)
    setTodos(t)
  }

  const onComplete = (id:number,checked:boolean) => {
    const updatedTodos = todos.map((todo) => {
      if(todo.id == id) {
        return { ...todo, complete: checked }
      } else {
        return todo
      }
    })
    setTodos(updatedTodos)
  }

  return (
    <>
      <Header />
      <div className="container mx-auto text-[13px] font-[Poppins] text-slate-500 pt-5 px-2 md:px-0">
        <div className="">
          <h2 className='font-semibold text-slate-700 mb-4'>Todos App</h2>
          

          <TodoForm onAdd={addTodo}/>
   
          <div className="grid gap-2 md:gap-4 grid-cols-2 md:grid-cols-4 my-8">
          {
            todos.map( (todo,i) => <TodoItem key={i} todo={todo} remove={onRemove} complete={onComplete}/> )
          }
          </div>
        </div>
        <div className="px-2">
          <h3 className='font-semibold mb-5 text-slate-700 text-lg'>Posts <button className='cursor-pointer bg-[coral] rounded-md py-2 px-6 text-sm text-white ml-4' onClick={ ()=>dispatch({ type: Actions.SORT_POSTS}) }>Sort</button></h3>
          <ul className='list-decimal list-inside columns-2 md:columns-3'>
            { posts.map( (post) => ( <li className='py-1' key={post.id} >{ post.title }</li>) ) }
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
