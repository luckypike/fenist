import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import styles from './Header.module.css'
import Logo from '!svg-react-loader!../../images/logo.svg'
import fish from '../../video/fish.mp4'

export default function Header ({ routes }) {
  return (
    <div className={styles.root}>
      <div className={styles.video}>
        <video playsInline autoPlay loop muted>
          <source src={fish} type="video/mp4"></source>
        </video>
      </div>

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

        <div className={styles.menu}>
          <Link to={routes.fest_path} className={styles.nav}>Расписание</Link>
          <Link to={routes.speakers_path} className={styles.nav}>Спикеры</Link>
          {/* <Link to={routes.partners_path} className={styles.nav}>Партнеры</Link> */}
        </div>
      </header>
    </div>
  )
}
