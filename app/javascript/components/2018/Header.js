import React from 'react';
import PropTypes from 'prop-types';

import { Link, NavLink } from 'react-router-dom';

import { withRoutes } from '../Context/RoutesContext';

import styles from './Header.module.css';

class Header extends React.Component {
  render () {
    return (
      <header className={styles.root}>
        <div className={styles.logo}>
          <Link to={this.props.routes.fest_path}>
            ФЕНИСТ
            <br />
            2018
          </Link>
        </div>
        <div className={styles.nav}>
          <ul>
            <li>
              <NavLink to={this.props.routes.fest_path}>
                Расписание
              </NavLink>
            </li>
            <li>
              <NavLink to={this.props.routes.speakers_path}>
                Спикеры
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default withRoutes(Header);
