import { Component } from 'react';
import format from '../components/format';
import parse from 'date-fns/parse';
import getDay from 'date-fns/get_day';
import Media from 'react-media';
import Page from '../layouts/Page';
import TimelineView from '../components/TimelineView';
import ListView from '../components/ListView';
import db from '../events';

export default class extends Component {
  static async getInitialProps({ query }) {
    const response = db
      .map((event, id) => ({
        ...event,
        id
      }))
      .filter((event) => {
        if (!query.day) {
          return true;
        }

        return getDay(event.startsAt) === parseInt(query.day, 10);
      });

    const events = await Promise.resolve(response);
    return {
      events: events.reduce((groupedByDay, event) => {
        const day = format(event.startsAt, 'dddd');
        groupedByDay[day] = [...(groupedByDay[day] || []), event];
        return groupedByDay;
      }, {})
    };
  }

  render() {
    return (
      <Page title="Arrangementer">
        <Media
          query="(max-width: 799px)"
        >
          {(matches) => {
            const Component = matches ? ListView : TimelineView;
            return <Component events={this.props.events} />;
          }}
        </Media>
      </Page>
    );
  }
}
