import format from 'date-fns/format';
import parse from 'date-fns/parse';

export default () => {
  return (
    <div>
      {Object.entries(events).map(([day, events]) => (
        <div key={day} className="day">
          <h2>{day}</h2>
          {events.map((event) => (
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

const events = [{
  id: 1,
  title: 'Strikk og drikk',
  startsAt: parse('March 21, 2017 15:00'),
  location: 'Downtown'
}, {
  id: 2,
  title: 'Mekk og drekk',
  startsAt: parse('March 22, 2017 17:00'),
  location: 'Downtown'
}, {
  id: 3,
  title: 'Rug og sug',
  startsAt: parse('March 23, 2017 17:00'),
  location: 'Downtown'
}].reduce((groupedByDay, event) => {
  const day = format(event.startsAt, 'dddd');
  groupedByDay[day] = [...(groupedByDay[day] || []), event];
  return groupedByDay;
}, {});
