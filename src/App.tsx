import { useEffect, useReducer } from 'react'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import { Actions, State } from './reducer/types'
import Header from './components/Header'
import { reducer } from './reducer'
import { StateContext, StateDispatchContext } from './context/all.context'

function App() {

  const initialState: State = {
    posts:[],
    todos:[]
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => dispatch({ type: Actions.ADD_POST,payload:res}));
  }, []);

  return (
    <StateContext.Provider value={state} >
      <StateDispatchContext.Provider value={dispatch} >
        <Header />
        <div className="container mx-auto text-[13px] font-[Poppins] text-slate-500 pt-5 px-2 md:px-0">
          <div className="">
            <h2 className='font-semibold text-slate-700 mb-4'>Todos App</h2>    
              <TodoForm/>
              <div className="grid gap-2 md:gap-4 grid-cols-2 md:grid-cols-4 my-8">
                {
                  state.todos.map( (todo,i) => <TodoItem key={i} todo={todo} /> )
                }
              </div>
          </div>
          <div className="px-2">
            <h3 className='font-semibold mb-5 text-slate-700 text-lg'>Posts <button className='cursor-pointer bg-[coral] rounded-md py-2 px-6 text-sm text-white ml-4' onClick={ ()=>dispatch({ type: Actions.SORT_POSTS}) }>Sort</button></h3>
            <ul className='list-decimal list-inside columns-2 md:columns-3'>
              { state.posts.map( (post) => ( <li className='py-1' key={post.id} >{ post.title }</li>) ) }
            </ul>
          </div>
        </div>
      </StateDispatchContext.Provider>
    </StateContext.Provider>
   
  )
}

export default App
