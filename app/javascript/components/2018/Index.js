import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { withRoutes } from '../Context/RoutesContext';

import styles from './Index.module.css';

class Index extends React.Component {
  render () {
    return (
      <div className={styles.root}>

        <Helmet>
          <title>2018</title>
        </Helmet>
        <div className={styles.intro}>
          Десятый фестиваль наук, искусств и технологий
        </div>

        <div className={styles.title}>
          <h1>
            Расписание
          </h1>
        </div>


      </div>
    );
  }
}

export default withRoutes(Index);
