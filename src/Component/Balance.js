import React from 'react'
import { UseGlobalContext } from '../Context/GlobalState'
const Balance = () => {
  const { transactions } = UseGlobalContext();
  // return amount
  const amount = transactions.map((amount) => amount = amount.price);
  // calculate total amount
  const totalAmount = amount.reduce((acc, item) => (acc += item), 0).toFixed(0);
  return (
    <div className='total-balance'>
        <h2>Your Balance</h2>
        <h3>${totalAmount}</h3>
    </div>
  )
}

export default Balance