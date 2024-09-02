import { createContext, Dispatch, ReactNode, useContext, useReducer } from "react";
import { ActionType, State } from "../reducer/types";
import { reducer } from "../reducer";

type AppContextType = {
   state: State,
   dispatch: Dispatch<ActionType>
}

const initialState: State = {
    posts:[]
}

const AppContext = createContext<AppContextType | null>(null)


const AppProvider = ({ children }: { children: ReactNode}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ state,dispatch }}>
            { children}
        </AppContext.Provider>
    )
}

export default AppProvider



export const useApp = () => {

    const context = useContext(AppContext)

    if (!context) {
        throw new Error(
            'The App Context must be used within an AppContextProvider'
        );
    }

    return context;
}
