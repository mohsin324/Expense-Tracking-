import React from 'react'
import { UseGlobalContext } from '../Context/GlobalState';
const IncomeExpense = () => {
  const { transactions } = UseGlobalContext();
  // return amount
  const amount = transactions.map((amount) => amount.price)
  // total number of income
  const income = amount.filter((price) => price > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
  // total number of expenses
  const expense = amount.filter((price) => price < 0).reduce((acc, item) => (acc += item), 0)* -1;
  return (
    <div className='balance'>
        {/* income */}
        <div className='money-plus'>
            <p>Income</p>
            <h3>$ {income}</h3>
        </div>
        <hr />
        {/* expense */}
        <div className='money-minus'>
            <p>Expense</p>
            <h3>${expense}</h3>
        </div>
    </div>
  )
}

export default IncomeExpense