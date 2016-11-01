import React from 'react';
import css from 'next/css';
import { container } from './styles';

const events = {
  'Mandag': [{
    id: 2,
    title: 'Mekk og drekk',
    startsAt: new Date(),
    endsAt: new Date(),
    location: 'Downtown'
  }],
  'Tirsdag': [{
    id: 2,
    title: 'Strikk og drikk',
    startsAt: new Date(),
    endsAt: new Date(),
    location: 'Downtown'
  }],
  'Onsdag': [{
    id: 3,
    title: 'Vask og smask',
    startsAt: new Date(),
    endsAt: new Date(),
    location: 'Downtown'
  }],
  'Torsdag': [{
    id: 3,
    title: 'Løp og kjøp',
    startsAt: new Date(),
    endsAt: new Date(),
    location: 'Downtown'
  }],
  'Fredag': [{
    id: 3,
    title: 'Ljug og sug',
    startsAt: new Date(),
    endsAt: new Date(),
    location: 'Downtown'
  }],
};

export default function Events() {
  return (
    <div className={[container, styles].join(' ')}>
      {Object.keys(events).map((day) => (
        <div key={day}>
          <h2>{day}</h2>
          {events[day].map((event) => (
            <div key={event.id}>
              {event.title}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

const styles = css({
  background: 'linear-gradient(90deg, #fff 50%, #ddd 0)',
  padding: 20
});
