import React, { useState } from 'react'
import './Expense.css';

const Expense = () => {
    const [input,setinput]=useState('')
    const[amount,setamount]=useState('')
    const [expenses,setexpenses]=useState([])
    function expense(){
      if(!input || !amount)return
      const newExpense={
        id:expenses.length+1,
        title:input,
        amount:amount
      }
    setexpenses([...expenses,newExpense])
    setinput('')
    setamount('')
    };
    const deleteexpense=(id)=>{
      setexpenses(expenses.filter((expense)=>expense.id!==id))
    }
    
  return (
    <div>
      <h>Expense Tracker</h>
      <div>
        <input type='text'
        placeholder='Expense'
        value={input}
        onChange={(e)=>setinput(e.target.value)}/>
        <input type=' text'
        placeholder='amount'
        value={amount}
        onChange={(e)=>{setamount(e.target.value)}}/>
        <button onClick={expense}>Add expense</button>
      </div>
      <ul className='expense-list'>
        {
          expenses.map((expense)=>(
            <li key={expense.id}>
              <span>{expense.title}</span>
              <span>{expense.amount}</span>
              <button onClick={()=>deleteexpense(expense.id)}>Delete</button>
            </li>
           
          ))}
        


      </ul>
    </div>
  )
}

export default Expense
