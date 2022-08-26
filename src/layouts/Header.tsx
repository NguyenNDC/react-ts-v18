import { Link } from 'react-router-dom';

export default function Header() {
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
      <h1>BLOG</h1>
    </nav>
  );
}
