import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <ul class="navbar">
      <li><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></li>
      <li><NavLink to="/create" activeClassName="is-active">Add Expense</NavLink></li>
      <li><NavLink to="/help" activeClassName="is-active">Help</NavLink></li>
    </ul>
  </header>
)

export default Header;