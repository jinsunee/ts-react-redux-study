// 루트 리듀서
// 추후 다른 리듀서를 만들어서 이곳 루트 리듀서에서 합쳐줄 예정.

import { combineReducers } from 'redux';
import counter from './counter';

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;

// RootState 타입을 만들어서 내보내줘야한다.
export type RootState = ReturnType<typeof rootReducer>;
