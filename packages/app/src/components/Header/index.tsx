import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Header: React.FC = () => (
  <nav className="navbar">
    <ul>
      <li>
        <Link to="/">App</Link>
      </li>
      <li>
        <Link to="/module-foo">Foo</Link>
      </li>
      <li>
        <Link to="/module-bar">Bar</Link>
      </li>
    </ul>
  </nav>
);

export default Header;
