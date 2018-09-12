import React from 'react';
import PropTypes from 'prop-types';

import { Link, NavLink } from 'react-router-dom';

import { withRoutes } from '../Context/RoutesContext';

import styles from './Header.module.css';

class Header extends React.Component {
  render () {
    return (
      <div className={styles.root}>
        <header className={styles.header}>
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
        
        <div className={styles.intro}>
          <p className={styles.sub}>
            Десятый фестиваль наук, искусств и технологий «Фенист 2018: Мысли!»
          </p>
          <p>
            3 дня открытого лектория в «Арсенале» и неделя ежедневных дневных лекции в университетах и школах города для школьников и студентов, учителей и преподавателей.
          </p>
        </div>
      </div>
    );
  }
}

export default withRoutes(Header);
