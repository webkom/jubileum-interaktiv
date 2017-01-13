import format from 'date-fns/format';
import parse from 'date-fns/parse';

export default ({ events }) => {
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
