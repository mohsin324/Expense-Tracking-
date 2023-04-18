import React from 'react'
import { UseGlobalContext } from '../Context/GlobalState'
const TransactionList = () => {
  const { transactions, deleteTransaction } = UseGlobalContext();
  return (
    transactions.map((tran) => {
      const sign = tran.price < 0 ? '-' : '+'
      return(
        // transaction list
        <li key={tran.id} className={tran.price < 0 ? 'list-minus' : 'list-plus'}>
          {tran.expenseDesc} <span>{sign}$ {Math.abs(tran.price)}</span><button className='delete-btn' type='button' onClick={()=> deleteTransaction(tran.id)}>X</button>
        </li>
      )
    })
  )
}

export default TransactionList