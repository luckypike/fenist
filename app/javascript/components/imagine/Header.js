import React from 'react';
import PropTypes from 'prop-types';

import { Link, NavLink } from 'react-router-dom';

import { withRoutes } from '../Context/RoutesContext';

import styles from './Header.module.css';
import Logo from '!svg-react-loader!../../images/logo.svg';

class Header extends React.Component {
  render () {
    return (
      <div className={styles.root}>
        <div className={styles.fish}></div>
        <header className={styles.header}>
          <div className={styles.logo}>
            <Link to={this.props.routes.fest_path}>
              <Logo />
              <div>
                ФЕНИСТ
                <br />
                {this.props.title}
              </div>
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
          <p className={styles.date}>
            <span>
              Сентябрь 24—30
            </span>
          </p>
          <p className={styles.sub}>
            <span>
              Десятый фестиваль наук, искусств и технологий «Фенист 2018: Мысли!»
            </span>
          </p>
          <p>
            <span>
              3 дня открытого лектория в «Арсенале» и неделя ежедневных дневных лекции в университетах и школах города для школьников и студентов, учителей и преподавателей.
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default withRoutes(Header);
