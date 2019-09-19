import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import styles from './Header.module.css'
import Logo from '!svg-react-loader!../../images/logo.svg'

export default function Header ({ title, routes }) {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link to={routes.fest_path}>
            <Logo />
          </Link>
        </div>

        <div className={styles.years}>
          <a href="/horizons"className={styles.year}>2019</a>
          <a href="/imagine" className={styles.year}>2018</a>
          <a href="/general-cat" className={styles.year}>2017</a>
        </div>

        {/* <div className={styles.menu}>
          <div className={styles.nav}>Расписание</div>
          <div className={styles.nav}>Спикеры</div>
          <div className={styles.nav}>Партнеры</div>
        </div> */}
      </header>
    </div>
  )
}
