import React from 'react'
import TransactionList from './TransactionList'

const Transaction = () => {
  return (
    <div className='transaction'>
        <h3>History</h3>
        <hr />
        <ul className='list'>
            <TransactionList />
        </ul>
    </div>
  )
}

export default Transaction