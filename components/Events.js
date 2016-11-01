import React from 'react';
import css from 'next/css';
import moment from 'moment';
import { container } from './styles';

const events = {
  'Mandag': [{
    id: 2,
    title: 'Mekk og drekk',
    startsAt: moment(),
    endsAt: moment(),
    location: 'Downtown'
  }],
  'Tirsdag': [{
    id: 2,
    title: 'Strikk og drikk',
    startsAt: moment(),
    endsAt: moment(),
    location: 'Downtown'
  }],
  'Onsdag': [{
    id: 3,
    title: 'Vask og smask',
    startsAt: moment(),
    endsAt: moment(),
    location: 'Downtown'
  }],
  'Torsdag': [{
    id: 3,
    title: 'Løp og kjøp',
    startsAt: moment(),
    endsAt: moment(),
    location: 'Downtown'
  }, {
    id: 4,
    title: 'Penger schmenger',
    startsAt: moment(),
    endsAt: moment(),
    location: 'Downtown'
  }],
  'Fredag': [{
    id: 5,
    title: 'Ljug og sug',
    startsAt: moment(),
    endsAt: moment(),
    location: 'Downtown'
  }],
};

export default function Events() {
  return (
    <div className={[container].join(' ')}>
      {Object.keys(events).map((day) => (
        <div key={day} className={css(styles.day)}>
          <h2 className={css(styles.dayTitle)}>{day}</h2>
          {events[day].map((event) => (
            <div key={event.id} className={css(styles.event)}>
              <h3>{event.title}</h3>
              <div>
              <time>{event.startsAt.format('HH:mm')}</time>
              {' @ '}
              <span>{event.location}</span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

const styles = {
  day: {
    marginBottom: 10
  },

  dayTitle: {
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: '#B11B11',
    fontSize: 20,
    borderBottom: '1px solid #ddd'
  },

  event: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10
  }
};
