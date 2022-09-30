import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { increment, section } from '../../store/section/reducer';

export default function Section() {
  const { value } = useAppSelector(section);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Section</h1>
      <span>{value}</span>
      <button onClick={() => dispatch(increment())}>increment</button>
    </div>
  );
}
