export type Post = {
    userId: number,
    id: number,
    title: string
}

export type Todo = {
    id: number,
    name: string,
    complete: boolean
  }

export type State = {
    posts: Post[],
    todos: Todo[]
}

export enum Actions {
    ADD_POST,
    DELETE_POST,
    SORT_POSTS,
    ADD_TODO,
    REMOVE_TODO,
    COMPLETE_TODO
}

//
type AddTodo = {
    type: Actions.ADD_TODO,
    payload: string
}

type RemoveTodo = {
    type: Actions.REMOVE_TODO,
    payload: number
}
type CompleteTodo = {
    type: Actions.COMPLETE_TODO,
    payload: { id:number, checked:boolean }
}

type AddPost = {
    type: Actions.ADD_POST,
    payload: Post[]
}

type DeletePost = {
    type: Actions.DELETE_POST,
    payload: number
}

type SortPost = {
    type: Actions.SORT_POSTS,
}

export  type ActionType = AddPost | DeletePost | SortPost | AddTodo | RemoveTodo | CompleteTodo
