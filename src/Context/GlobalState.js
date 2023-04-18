import React,{ createContext, useContext, useReducer } from "react";
import { reducer } from "./Reducer";
import { ADD_TRANSACTION, DELETE_TRANSACTION } from "./Action";
const tran = {
    transaction:[
        {id:1, expenseDesc:'Book', price: -200},
        {id:2, expenseDesc:'Goods', price: -20},
        {id:3, expenseDesc:'Goods', price: 20}
    ]
}
// create context
export const GlobalContext = createContext(tran);
// use context
export const UseGlobalContext = () => useContext(GlobalContext);

const GlobalState = ({children}) => {
    const [ state, dispatch ] = useReducer(reducer, tran);
    // delete transaction
    const deleteTransaction = (id) => {
        dispatch({ type: DELETE_TRANSACTION, payload: {id} });
    }
    // add transaction
    const addTransaction = (transaction) => {
        dispatch({type: ADD_TRANSACTION, payload: {transaction} })
    }
    return(
        <GlobalContext.Provider value={{  
            transactions: state.transaction,
            deleteTransaction,
            addTransaction
        }}>
            {children}

        </GlobalContext.Provider>
    )
}
export default GlobalState;