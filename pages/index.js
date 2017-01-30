import { Component } from 'react';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import getDay from 'date-fns/get_day';
import Page from '../layouts/Page';
import { Header } from '../components';
import TimelineView from '../components/TimelineView';
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
      <Page title="Home">
        <TimelineView events={this.props.events} />
      </Page>
    );
  }
}
