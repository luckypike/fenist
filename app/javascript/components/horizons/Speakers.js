import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import classNames from 'classnames'

import { Link } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import styles from './Speakers.module.css';

export default function Speakers(props) {
  const [speakers, setSpeakers] = useState(null)

  useEffect(() => {
    const _loadAsyncData = async () => {
      const { data: { speakers } } = await axios.get(`${props.routes.speakers_path}.json`)

      setSpeakers(speakers)
    }

    _loadAsyncData()
  }, [])

  return (
    <div className={styles.root}>
      <div className={styles.placeholder}></div>
      
      <div className={styles.header}>
        <h1>
          Спикеры
        </h1>

        <Helmet>
          <title>
            Спикеры
          </title>
        </Helmet>
      </div>

      {speakers &&
        <div className={styles.speakers}>
          {speakers.map(speaker =>
            <div className={styles.speaker} key={speaker.id}>
              <div className={styles.title}>
                {speaker.title}
              </div>

              <div className={styles.desc}>
                {speaker.desc}
              </div>
            </div>
          )}
        </div>
      }
    </div>
  )
}
