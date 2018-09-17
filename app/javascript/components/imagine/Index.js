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

import styles from './Index.module.css';

class Index extends React.Component {
  state = {
    sections: null
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

    axios.get(`${this.props.routes.fest_path}.json`, { cancelToken: this._asyncRequest.token })
      .then(res => {
        this.setState({
          sections: res.data.sections
        });
      });
  }

  render () {
    const { sections } = this.state;

    return (
      <div className={styles.root}>
        <div className={styles.header}>
          <h1>
            Расписание
          </h1>
        </div>

        {sections &&
          <div className={styles.sections}>
            {sections.map(section =>
              <Section section={section} key={section.id} />
            )}
          </div>
        }
      </div>
    );
  }
}

class Section extends React.Component {
  state = {
    active: null,
    open: false,
  }

  constructor(props) {
    super(props);

    this.started_at = this.props.section.started_at ? moment.utc(this.props.section.started_at) : null;
    this.ended_at = this.props.section.ended_at ? moment.utc(this.props.section.ended_at) : null;

    this.days = [];
    for (let m = moment(this.started_at); m.isBefore(this.ended_at); m.add(1, 'days')) {
      this.days.push(moment(m));
    }
  }

  componentDidMount() {
    if(moment.utc().isBetween(this.started_at, this.ended_at)) {
      this.setState({
        active: moment.utc()
      });
    } else if(this.started_at) {
      this.setState({
        active: moment(this.started_at)
      });
    }
  }

  handleDayClick = (day) =>  {
    this.setState({
      active: moment(day),
    });
  }

  handleToggleClick = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }

  render () {
    const { section } = this.props;
    const { active } = this.state;

    if(!active) return null;

    let events = section.events.filter(event => moment.utc(event.started_at).isSame(active, 'day'));
    const eventsCount = events.length;
    if(!this.state.open) {
      events = events.slice(0, 2);
    }


    return (
      <div className={classNames(styles.section, styles[`section_${section.id}`])}>
        <h2>
          {section.title}
        </h2>

        <div className={styles.days}>
          {this.days.map((day, _) =>
            <div className={classNames(styles.day, { [styles.active]: day.isSame(active) })} key={_} onClick={() => this.handleDayClick(day)}>
              <span className={styles.short}>
                {day.format('DD.MM')}
              </span>
              <span className={styles.long}>
                {day.format('DD MMMM')}
              </span>
            </div>
          )}
        </div>
        {section.events &&
          <div className={styles.events}>
            {events.map(event =>
              <div className={styles.event} key={event.id}>
                <div className={styles.time}>
                  <span>
                    {moment.utc(event.started_at).format('HH:mm')}
                     — 
                    {moment.utc(event.ended_at).format('HH:mm')}
                  </span>
                </div>
                <div className={styles.content}>
                  {event.place &&
                    <div className={styles.place}>
                      {event.place.title_short || event.place.title}, {event.place.desc}
                    </div>
                  }

                  <div className={styles.speakers}>
                    {event.speakers.map(speaker => speaker.title).join(', ')}
                  </div>

                  <div className={styles.title}>
                    {event.title}
                  </div>
                  {event.desc &&
                    <div className={styles.desc}>
                      {event.desc}
                    </div>
                  }
                </div>
              </div>
            )}
          </div>
        }

        {eventsCount > 2 &&
          <div className={styles.more} onClick={this.handleToggleClick}>
            {this.state.open ? 'Свернуть' : 'Полное расписание'}
          </div>
        }
      </div>
    );
  }
}

export default withRoutes(Index);
