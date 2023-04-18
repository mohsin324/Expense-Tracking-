import { ADD_TRANSACTION, DELETE_TRANSACTION } from "./Action";
// REDUCER
export const reducer = (state, action) => {
    switch(action.type){
        case DELETE_TRANSACTION:
            const newTransaction = state.transaction.filter((tran) => action.payload.id !== tran.id  );
            return { transaction: newTransaction }
        case ADD_TRANSACTION:
            return { ...state, transaction: [ action.payload.transaction, ...state.transaction ]}
        default:
            return state
    }
}   