import { useContext } from 'react';
import i18next from 'i18next';
import { Link } from 'react-router-dom';

import { useAppDispatch } from '../store/hooks';
import { fetchUsers } from '../store/app/reducer';

import { ThemeContext } from '../context/theme/ThemeContext';

export default function Header() {
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(fetchUsers());
  };

  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <nav className="nav">
      <h1>LOGO</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/section">Section</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
      </ul>
      <div>
        <button onClick={() => i18next.changeLanguage('en')}>en</button>
        <button onClick={() => i18next.changeLanguage('vi')}>vi</button>
      </div>
      <div>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>theme</button>
      </div>
      <div>
        <button onClick={() => handleLogin()}>login</button>
      </div>
      <h1>BLOG</h1>
    </nav>
  );
}
