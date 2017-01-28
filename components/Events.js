import { Component } from 'react';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import Link from 'next/link';
import Box from './Box';
import Button from './Button';

const trans = {
  'Monday': 'Mandag',
  'Tuesday': 'Tirsdag',
  'Wednesday': 'Onsdag',
  'Thursday': 'Torsdag',
  'Friday': 'Fredag',
  'Saturday': 'Lørdag',
  'Sunday': 'Søndag'
};

const expand = (state) => ({
  expanded: !state.expanded
});

class Event extends Component {
  state = {
    expanded: false
  };

  render() {
    const { event } = this.props;
    return (
      <div className="box">
        <div>
          <a onClick={() => this.setState(expand)}><h3 className="eventTitle">{event.title} {this.state.expanded ? '\u25BF' : '\u25B9'}</h3></a>

          {this.state.expanded && (
            <div style={{ paddingTop: 20 }}>
              {event.description}

              <div style={{ paddingTop: 20 }}>
                {event.link && <Button>Påmelding via Abakus.no &rarr;</Button>}
              </div>
            </div>
          )}
        </div>
        <div>
          <time className="when">
            {format(event.startsAt, 'HH:mm')}
            {event.endsAt && <span> &ndash; {format(event.endsAt, 'HH:mm')}</span>}
          </time>
        </div>

        <style jsx>{`
          .eventTitle {
            font-size: 26px;
          }

          .box {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 20px;
            background: white;
            box-shadow: 0 0 10px #eee;
            border: 1px solid #ccc;
            margin-bottom: 20px;
          }

          .when {
            font-size: 24px;
            color: #aaa;
          }

          .button:active {
            transform: translateY(1px);
          }
        `}
        </style>
      </div>
    );
  }
}

export default ({ events }) => {
  return (
    <div className="root">
      {Object.entries(events).map(([day, events]) => (
        <div key={day} className="day">
          <h2 className="title">{trans[day]}</h2>
          {events.map((event) => (
            <Event event={event} key={event.id} />
          ))}
        </div>
      ))}

      <style jsx>{`
        .root  {
          width: 100%;
          padding-top: 20px;
        }

        .day {
          padding: 10px 20px 10px 10px;
        }

        .title {
          padding: 10px;
          color: #888;
          letter-spacing: 2px;
          font-size: 20px;
          font-weight: 400;
          text-transform: uppercase;
        }
      `}
      </style>
    </div>
  );
};
