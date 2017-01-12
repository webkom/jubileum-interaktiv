import format from 'date-fns/format';

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
  }, {
    id: 4,
    title: 'Penger schmenger',
    startsAt: new Date(),
    endsAt: new Date(),
    location: 'Downtown'
  }],
  'Fredag': [{
    id: 5,
    title: 'Ljug og sug',
    startsAt: new Date(),
    endsAt: new Date(),
    location: 'Downtown'
  }],
};

export default () => {
  return (
    <div className="container">
      {Object.keys(events).map((day) => (
        <div key={day} className="day">
          <h2>{day}</h2>
          {events[day].map((event) => (
            <div key={event.id} className="event">
              <h3>{event.title}</h3>
              <div>
              <time>{format(event.startsAt, 'HH:mm')}</time>
              {' @ '}
              <span>{event.location}</span>
              </div>
            </div>
          ))}
        </div>
      ))}

      <style jsx>{`
        .container {
          max-width: 640px;
          margin: 0 auto;
        }
        
        .day {
          margin-bottom: 10px;
        }

        .event {
          display: flex;
          flex-direction: column;
          padding: 10px;
        }
      `}
      </style>
    </div>
  );
};
