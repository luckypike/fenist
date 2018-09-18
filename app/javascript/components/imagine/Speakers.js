import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import * as moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru');
import classNames from 'classnames';

import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { withRoutes } from '../Context/RoutesContext';

import styles from './Speakers.module.css';

class Speakers extends React.Component {
  state = {
    speakers: null
  }

  componentDidMount() {
    this._loadAsyncData();
  }

  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel();
    }
  }

  _loadAsyncData() {
    this._asyncRequest = axios.CancelToken.source();

    axios.get(`${this.props.routes.speakers_path}.json`, { cancelToken: this._asyncRequest.token })
      .then(res => {
        this.setState({
          speakers: res.data.speakers
        });
      });
  }

  render () {
    const { speakers } = this.state;

    return (
      <div className={styles.root}>
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
              <div className={styles.speaker}>
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
    );
  }
}

export default withRoutes(Speakers);
