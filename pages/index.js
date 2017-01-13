import { Component } from 'react';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import Page from '../layouts/Page';
import { Header, Events } from '../components';

export default class extends Component {
  static async getInitialProps() {
    const response = [{
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
    }];

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
        <Events events={this.props.events} />
      </Page>
    );
  }
}
