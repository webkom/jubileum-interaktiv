import { Component } from 'react';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import getDay from 'date-fns/get_day';
import Page from '../layouts/Page';
import { Header, Events } from '../components';

export default class extends Component {
  static async getInitialProps({ query }) {
    const response = [{
      id: 1,
      title: 'Strikk og drikk',
      startsAt: parse('March 13, 2017 15:00'),
      location: 'Downtown',
      link: 'https://abakus.no/event/123',
      description: 'Abakus inviterer til en heidundranes kveld med strikking og drikking.'
    }, {
      id: 2,
      title: 'Mekk og drekk',
      startsAt: parse('March 14, 2017 17:00'),
      location: 'Downtown',
      description: 'Vi drekker oss drita og mekker ting.'
    }, {
      id: 3,
      title: 'Rug og sug',
      startsAt: parse('March 15, 2017 17:00'),
      location: 'Downtown'
    },{
      id: 4,
      title: 'Rug og sug',
      startsAt: parse('March 16, 2017 17:00'),
      endsAt: parse('March 23, 2017 21:00'),
      location: 'Downtown'
    }, {
      id: 5,
      title: 'Revy',
      startsAt: parse('March 16, 2017 17:00'),
      location: 'Downtown'
    }, {
      id: 6,
      title: 'Revy',
      startsAt: parse('March 17, 2017 17:00'),
      location: 'Downtown'
    }, {
      id: 7,
      title: 'Jubileumsgalla',
      startsAt: parse('March 18, 2017 17:00'),
      location: 'Scandic Lerkendal'
    }, {
      id: 8,
      title: 'Revy',
      startsAt: parse('March 18, 2017 17:00'),
      location: 'Downtown'
    }, {
      id: 9,
      title: 'Revy',
      startsAt: parse('March 18, 2017 17:00'),
      location: 'Downtown'
    }, {
      id: 10,
      title: 'Revy',
      startsAt: parse('March 18, 2017 17:00'),
      location: 'Downtown'
    }, {
      id: 11,
      title: 'Revy',
      startsAt: parse('March 18, 2017 17:00'),
      location: 'Downtown'
    }, {
      id: 12,
      title: 'Revy',
      startsAt: parse('March 18, 2017 17:00'),
      location: 'Downtown'
    }].filter((event) => {
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
        <Events events={this.props.events} />
      </Page>
    );
  }
}
