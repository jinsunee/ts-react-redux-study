import { removeTodo, toggleTodo } from '../modules/todos';

import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export default function useTodoActions(id: number) {
  const dispatch = useDispatch();

  const onToggle = useCallback(() => dispatch(toggleTodo(id)), [dispatch, id]);
  const onRemove = useCallback(() => dispatch(removeTodo(id)), [dispatch, id]);

  return { onToggle, onRemove };
}