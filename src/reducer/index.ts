import { Actions, ActionType, State } from "./types"

export const reducer = (state: State,action: ActionType): State => {
    switch (action.type) {
        case Actions.ADD_POST:
            return {
                ...state,
                posts: action.payload
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