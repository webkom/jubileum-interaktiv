import { Component } from 'react';
import format from 'date-fns/format';

const trans = {
  'Monday': 'Man',
  'Tuesday': 'Tirs',
  'Wednesday': 'Ons',
  'Thursday': 'Tors',
  'Friday': 'Fre',
  'Saturday': 'Lør',
  'Sunday': 'Søn'
};

const Circle = ({
  children,
  size = 50,
  style,
  selected,
  ...props
}) => (
  <button className="root selected" style={{
    width: size,
    height: size,
    borderRadius: size / 2,
    ...style
  }} {...props}>
    {children}

    <style jsx>{`
      .root {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        color: rgba(255, 255, 255, .4);
        transition: transform .1s, color .2s;
        font-size: 22px;
        border: 0;
        outline: none;
        cursor: pointer;
        background: #b11b11;
      }

      .root:hover {
        color: rgba(255, 255, 255, 1);
      }
    `}
    </style>
  </button>
);

class Day extends Component {
  state = {
    selectedIndex: 0
  };

  render() {
    const { day, events } = this.props;

    const date = events[0].startsAt;

    return (
      <div className="day">
        <div className="date">
          <h2 className="title">{trans[day]}</h2>
          <span style={{ color: '#b11b11' }}>{format(date, 'DD.MM')}</span>
        </div>

        <div className="right">
          <div className="row">
            {events.map((event, index) => {
              const hour = format(event.startsAt, 'H');
              const selected = index === this.state.selectedIndex;
              return (
                <Circle
                  key={index}
                  onClick={() => this.setState({ selectedIndex: index })}
                  size={40}
                  style={{
                    transform: `translateX(${(hour-8)/24 * 700}px) scale(${selected ? 1.5 : 1})`
                  }}
                >
                  {hour}
                </Circle>
              );
            })}
          </div>

          <div className="content">
            <h2>{events[this.state.selectedIndex].title}</h2>
            {events[this.state.selectedIndex].description}
          </div>
        </div>

        <style jsx>{`
          .day {
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            background: white;
            margin-top: 25px;
            padding: 30px 20px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, .1);
          }

          .date {
            text-align: center;
            line-height: 30px;
            padding: 0 40px 20px 20px;
          }

          .right {
            width: 100%;
          }

          .content {
            margin: 20px;
            padding: 20px;
            border-left: 3px solid #b11b11;
          }

          .row {
            flex: 1;
            display: flex;
            flex-direction: row;
            position: relative;
            align-items: center;
          }

          .row::before {
            position: absolute;
            content: '';
            height: 6px;
            background: #eee;
            width: 100%;
            top: 20px;
            border-radius: 3px;
          }
        `}</style>
      </div>
    );
  }
}


export default ({ events }) => (
  <div className="root">
    {Object.entries(events).map(([day, events]) => (
      <Day key={day} day={day} events={events} />
    ))}

    <style jsx>{`
      .root {
        width: 100%;
        padding: 20px 0 40px 0;
      }
    `}
    </style>
  </div>
);
