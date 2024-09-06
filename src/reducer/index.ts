import { Actions, ActionType, State, Todo } from "./types"

export const reducer = (state: State,action: ActionType): State => {
    switch (action.type) {
        case Actions.ADD_POST:
            return {
                ...state,
                posts: action.payload
            }
        case Actions.ADD_TODO:
            let obj:Todo = {
                id: state.todos.length + 1,
                name: action.payload,
                complete: false
              }
            return {
                ...state,
                todos: [...state.todos,obj]
            }
        case Actions.REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter( (todo) => todo.id !== action.payload)
            }
        case Actions.COMPLETE_TODO:
            const updatedTodos = state.todos.map((todo) => {
                if(todo.id == action.payload.id) {
                  return { ...todo, complete: action.payload.checked }
                } else {
                  return todo
                }
            })
            return {
                ...state,
                todos: updatedTodos
            }
        case Actions.SORT_POSTS: 
            const _posts = [...state.posts]
            return {
                ...state,
                posts: _posts.sort((a,b) =>{
                    if(a.title.toLowerCase() < b.title.toLowerCase()){
                        return -1
                    }

                    if(a.title.toLowerCase() > b.title.toLowerCase()){
                        return 1
                    }

                    return 0
                })
            }
    
        default:
            return state
    }
} 