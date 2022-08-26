import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { sectionCount } from '../../store/section/reducer';

export default function Section() {

  const count = useAppSelector(sectionCount);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>Section</div>
    </div>
  );
}
