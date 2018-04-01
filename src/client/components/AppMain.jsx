import React from 'react';
import EventList from './EventList';
import getEvents from '../libs/helpers';


class AppMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventList: this.props.events,

    };
  }
  componentDidMount() {
    this.fetchData(94117, '2018-04-01');
  }

  fetchData(zip, date) {
    getEvents(zip, date, (data) => {
      this.setState({
        eventList: data,
      });
    });
  }

  render() {
    return (
      <div>
        <EventList
          events={this.state.eventList}
        />
      </div>);
  }
}

export default AppMain;
