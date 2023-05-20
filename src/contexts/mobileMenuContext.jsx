import React, { createContext, useReducer } from "react";
import { initialState,reducer } from "../reducers/reducer";

export const MobileMenuContext = createContext();

export const MobileMenuProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer,initialState);

    return (
        <MobileMenuContext.Provider value={{state,dispatch}}>
            {children}
        </MobileMenuContext.Provider>
    )
}
