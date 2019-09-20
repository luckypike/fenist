import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import classNames from 'classnames'

import { Link } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import styles from './Partners.module.css';

export default function Partners(props) {
  const [partners, setPartners] = useState(null)

  useEffect(() => {
    const _loadAsyncData = async () => {
      const { data: { partners } } = await axios.get(`${props.routes.partners_path}.json`)

      setPartners(partners)
    }

    _loadAsyncData()
  }, [])

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h1>
          Партнеры
        </h1>

        <Helmet>
          <title>
            Партнеры
          </title>
        </Helmet>
      </div>

      {partners &&
        <div className={styles.partners}>
          {partners.map(partner =>
            <div className={styles.partner} key={partner.id}>
              <div className={styles.title}>
                {partner.title}
              </div>

              <div className={styles.url}>
                <a href={partner.url}>
                  {partner.url}
                </a>
              </div>
            </div>
          )}
        </div>
      }
    </div>
  )
}
