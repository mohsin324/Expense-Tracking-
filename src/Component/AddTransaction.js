import React, { useState } from 'react'
import { UseGlobalContext } from '../Context/GlobalState';
const AddTransaction = () => {
    const { addTransaction } = UseGlobalContext();
    const [ expense, setExpense ] = useState('');
    const [ amount, setAmount ] = useState(0);
    // submit new transaction
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: Math.random() * 100,
            expenseDesc: expense,
            price: +amount
        }
        addTransaction(newTransaction)
        // clear input fields
        setExpense('');
        setAmount(0)
    }
  return (
    <div className='add-transaction'>
        <h3>Add Transaction</h3>
        <hr />
        <form onSubmit={handleSubmit}>
            <div className='form-control'>
                <label htmlFor='expense'>Expense Detail</label>
                <input type='text' placeholder='Enter your expense detail' name='expesne' value={expense}  onChange={(e)=> setExpense(e.target.value)}  />
            </div>
            <div className='form-control'>
                <label htmlFor='amount'>Amount <br/> (negative - expense, positive - income)</label>
                <input type='number' name='amount' onChange={(e)=> setAmount(e.target.value)} value={amount} />
            </div>
            <button type='submit' className='btn'>Add Transaction</button>
        </form>

    </div>
  )
}

export default AddTransaction