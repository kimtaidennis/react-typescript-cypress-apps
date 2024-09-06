import { createContext, Dispatch } from "react";
import { ActionType, State } from "../reducer/types";


export const StateContext = createContext<State | null>(null)
export const StateDispatchContext = createContext<Dispatch<ActionType> | null>(null)