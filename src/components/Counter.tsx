// counter presentational component 만들기
import React from 'react';
import useCounter from '../hooks/useCounter';

function Counter() {
  // first-step 처럼 props로 받아오는 것이 아닌, 
  // useCounter Hook을 통해서 받아왔다.
  
  const { count, onIncrease, onDecrease, onIncreaseBy } = useCounter();

  return (
    <div>
       <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={() => onIncreaseBy(5)}>+5</button>
    </div>
  );
}

export default Counter;
