export type Post = {
    userId: number,
    id: number,
    title: string
}

export type State = {
    posts: Post[]
}

export enum Actions {
    ADD_POST,
    DELETE_POST,
    SORT_POSTS
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

export  type ActionType = AddPost | DeletePost | SortPost
