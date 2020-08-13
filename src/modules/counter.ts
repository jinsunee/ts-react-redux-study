// 1. 액션 type 선언
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

// as const ? 
// typescript 문법, const assertions
// 액션 생성함수를 통해 액션 객체를 만들게 됐을 때, type의 Typescript 타입이 string이 되지 않고 실제 값을 가르키게 된다.
// 예를 들어
// const str = 'hello world';
// const strAsConst = 'hello world' as const;

// const object = {
//   str // return type : string
// }; 

// const obejct2 = {
//   strAsConst // return type : 실제 값인 "hello world"로 나오게 된다.
// };

// 2. 액션 생성함수 선언
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff
});

// 3. 액션 객체들에 대한 type 준비하기
type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;
// 여기서 ReturnType은 함수에서 반환하는 타입을 가져올 수 있게 해주는 유틸 타입
// ReturnType<typeof increase> : { type: "counter/INCREASE" }

// 4. 상태의 타입과 상태의 초깃값 선언하기
type CounterState = {
  count: number;
}; 

const initialState: CounterState = {
  count: 0,
}

// 5. 리듀서 작성하기
function counter(state: CounterState = initialState, action: CounterAction) {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

export default counter;

// 모듈 작성 끝!



