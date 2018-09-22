import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import classNames from 'classnames';

import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { withRoutes } from '../Context/RoutesContext';

import styles from './Partners.module.css';

class Partners extends React.Component {
  state = {
    partners: null
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

    axios.get(`${this.props.routes.partners_path}.json`, { cancelToken: this._asyncRequest.token })
      .then(res => {
        this.setState({
          partners: res.data.partners
        });
      });
  }

  render () {
    const { partners } = this.state;

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
    );
  }
}

export default withRoutes(Partners);
