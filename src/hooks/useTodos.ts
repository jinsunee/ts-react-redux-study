import { RootState } from '../modules';
import { useSelector } from 'react-redux';

export default function useTodos() {
  const todos = useSelector((state: RootState) => state.todos);
  return todos;
}