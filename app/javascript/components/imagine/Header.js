import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Link, NavLink } from 'react-router-dom';

import { withRoutes } from '../Context/RoutesContext';

import styles from './Header.module.css';
import Logo from '!svg-react-loader!../../images/logo.svg';

class Header extends React.Component {
  render () {
    return (
      <div className={styles.root}>
        <div className={styles.fish}>
          <div className={styles.eyes} />
        </div>

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

          <div className={styles.years}>
            <Link to={this.props.routes.fest_path} className={classNames(styles.year, styles.active)}>
              2018
            </Link>
            <a href="/general-cat" className={styles.year}>
              2017
            </a>

            {/*
              <a href="http://2016.fenist.org/" className={styles.year}>
                2016
              </a>
            */}
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

          <div className={styles.socials}>
            <a href="//t.me/fenistfest" className={classNames(styles.social, styles.tg)} target="_blank">
              Telegram-канал для вопросов
            </a>

            <a href="//fb.com/fenistnn" className={classNames(styles.social, styles.fb)} target="_blank" />
            <a href="//vk.com/fenist" className={classNames(styles.social, styles.vk)} target="_blank" />
            <a href="//twitter.com/fenistnn" className={classNames(styles.social, styles.tw)} target="_blank" />
            <a href="//www.instagram.com/fenistnn/" className={classNames(styles.social, styles.in)} target="_blank" />
            <a href="//www.youtube.com/channel/UCni93LSiaWCThIWFdLvyb6A" className={classNames(styles.social, styles.yt)} target="_blank" />
          </div>
        </div>
      </div>
    );
  }
}

export default withRoutes(Header);
