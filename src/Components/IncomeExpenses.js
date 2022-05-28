import React, {useContext} from 'react';
import { GlobalContext } from '../Context/GlobalState';
import {numberWithCommas} from '../utils/format';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  
  const amounts = transactions.map(transaction => transaction.amount);
//Cycles through to find and add items with a value greater than zero
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
//Cycles through and adds items with negative value
  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">${numberWithCommas(income)}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">${numberWithCommas(expense)}</p>
        </div>
      </div>
  )
}
