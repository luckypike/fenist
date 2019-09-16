import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Link } from 'react-router-dom'

import styles from './Header.module.css'
import Logo from '!svg-react-loader!../../images/logo.svg'

export default function Header ({ title, routes }) {
  return (
    <div className={styles.root}>
      <div className={styles.fish}>
        <div className={styles.eyes} />
      </div>

      <header className={styles.header}>
        <div className={styles.logo}>
          <Link to={routes.fest_path}>
            <Logo />
            <div>
              ФЕНИСТ
              <br />
              2019
            </div>
          </Link>
        </div>
      </header>

      <div className={styles.intro}>
        <p className={styles.date}>
          <span>
            23—29 сентября
          </span>
        </p>
        <p className={styles.sub}>
          <span>
            Одиннадцатый фестиваль наук, искусств и технологий «Фенист»
          </span>
        </p>
        <p>
          <span>
            В этом году у нас фестиваль будет традиционно состоять из 2 блоков: 3 дня открытого лектория в «Арсенале» и неделя ежедневных дневных лекции в университетах и школах города.
          </span>
        </p>

        <p>
          Подробная программа уточняется и скоро будет размещена.
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
  )
}
