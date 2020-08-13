import { addTodo } from '../modules/todos';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export default function useAddTodo() {
  const dispatch = useDispatch();

  return useCallback(text => dispatch(addTodo(text)), [dispatch]);
}