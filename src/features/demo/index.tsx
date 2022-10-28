import { Outlet } from 'react-router-dom';

function Demo(): JSX.Element {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Demo;
