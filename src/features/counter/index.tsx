import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount
} from '../../store/counter/counterSlice';

import './style.scss';

export default function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div className="counter">
      <div className="sum-sub">
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          -
        </button>
        <span>
          {count.value} --- {count.status}
        </span>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
      <div className="redux">
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <div className="btn">
          <button onClick={() => dispatch(incrementByAmount(incrementValue))}>Add Amount</button>
          <button onClick={() => dispatch(incrementAsync(incrementValue))}>Add Async</button>
          <button onClick={() => dispatch(incrementIfOdd(incrementValue))}>Add If Odd</button>
        </div>
      </div>
    </div>
  );
}
