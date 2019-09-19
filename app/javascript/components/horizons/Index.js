import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import axios from 'axios'
import { path } from '../Routes'
import styles from './Index.module.css'
import fish from '../../video/fish.mp4'
import Section from './Section'

export default function Index (props) {
  const [scrolling, setScrolling] = useState(false)
  const [sections, setSections] = useState()

  useEffect(() => {
  const _onScroll = e => {
    if (window.scrollY > (window.innerWidth / 1.7 - 64)) {
      setScrolling(true)
    } else if (window.scrollY < (window.innerWidth / 1.7 - 64)) {
      setScrolling(false)
    }
  }
    if (window) {
      window.addEventListener('scroll', _onScroll)
    }

    const _loadAsyncData = async () => {
      const { data: { sections } } = await axios.get(`${props.routes.fest_path}.json`)

      setSections(sections)
    }

  _loadAsyncData()

  }, [scrolling])

  function handleScrollDown () {
    if (document) {
      window.scroll({ top: 1300, left: 0, behavior: 'smooth' });
    }
  }

  return (
    <div className={styles.root}>
      <div className={classNames({[styles.placeholder]: scrolling})}></div>

      <div className={styles.video}>
        <video playsInline autoPlay loop muted>
          <source src={fish} type="video/mp4"></source>
        </video>
      </div>

      <section className={styles.screen}>
        <div className={styles.preview}>
          <div className={styles.date}>
            <span>23-29 сентября</span>
          </div>

          <div className={styles.title}>
            Фестиваль наук, искусств и технологий Фенист 2019
          </div>

          <div className={styles.description}>
            3 дня открытого лектория в «Арсенале»  и неделя ежедневных дневных лекции в университетах и школах города ля школьников и студентов, учителей ипреподавателей.
          </div>
        </div>

        <div className={styles.socials}>
          <div className={styles.subscribe}>Подписывайтесь</div>
          <a href="//vk.com/fenist" target="_blank" className={classNames(styles.social, styles.vk)}></a>
          <a href="//fb.com/fenistnn" target="_blank" className={classNames(styles.social, styles.fb)}></a>
          <a href="//twitter.com/fenistnn" target="_blank" className={classNames(styles.social, styles.tw)}></a>
          <a href="//www.instagram.com/fenistnn/" target="_blank" className={classNames(styles.social, styles.inst)}></a>
          <a href="//www.youtube.com/channel/UCni93LSiaWCThIWFdLvyb6A" target="_blank" className={classNames(styles.social, styles.yt)}></a>
        </div>

        <div className={styles.scroll} onClick={handleScrollDown}>
          <div className={styles.program}>Программа фестиваля</div>
          <div className={styles.arrow}>
          </div>
        </div>
      </section>

        <div className={styles.container}>
          <div className={styles.group}>
            <div className={styles.lecture}>
              <span>Лекция</span>
            </div>

            <div className={styles.name}>
              <span>Александр Соколов</span>
            </div>

            <div className={styles.text}>
              Российский научный журналист и популяризатор науки. Основатель и главный редактор научно- просветительского портала Антропогенез.ру
            </div>

            <div className={styles.start}>
              27 сентября, начало в 17:00, <br /> Арсенал, Кремль, стр. 6
            </div>
          </div>
          <div className={styles.photo}></div>
        </div>

        <div className={styles.container}>
          <div className={styles.events}>
            {sections &&
              <div>
                {sections.map(section =>
                  <Section section={section} key={section.id} />
                )}
              </div>
            }
          </div>
        </div>
    </div>
  )
}
