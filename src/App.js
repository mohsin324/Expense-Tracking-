import React, { useState } from "react";
// css
import './App.css'
// Component
import Header from "./Component/Header";
import Balance from "./Component/Balance";
import Transaction from "./Component/Transaction";
import AddTransaction from "./Component/AddTransaction";
import IncomeExpense from "./Component/IncomeExpense";
const App = () => {
  return (
    <div>
      <Header />
      <Balance />
      <IncomeExpense />
      <Transaction />
      <AddTransaction />
    </div>
  )
}
export default App;