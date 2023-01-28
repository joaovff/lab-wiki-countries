import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul style={{ listStyle: 'none' }}>
        <li>
          <NavLink to="/countries">Countries</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
