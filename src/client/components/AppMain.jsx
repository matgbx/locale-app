import React from 'react';
import EventList from './EventList';
import getEvents from '../libs/helpers';
import MapView from './MapView';


class AppMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventList: this.props.events,
      center: this.props.center,
      zipCode: this.props.zipCode,
    };
    this.render = this.render.bind(this);
    this.handleZipSubmit = this.handleZipSubmit.bind(this);
  }
  componentDidMount() {
    this.fetchData(94117, '');
  }

  fetchData(zip, date) {
    getEvents(zip, date, (data) => {
      const parsedData = JSON.parse(data);
      this.setState({
        eventList: parsedData.events,
        center: parsedData.center,
        zipCode: parsedData.zipCode,
      }, () => this.render());
    });
  }

  handleZipSubmit(val) {

  }

  render() {
    console.log('API Key ===> ', process.env.GOOGLE_API);
    return (
      <div>
        <div className="header">LOCALE</div>
        <div className="navBar">
          <input className="inputBox" type="text" placeholder="enter your zip..." />
          <div className="submitBtn" onClick={this.handleZipSubmit}>submit</div>
        </div>
        <div className="container">
          <div className="sideBar"></div>
          <EventList
            events={this.state.eventList}
          />
          <MapView
            center={this.state.center}
            zipCode={this.state.zipCode}
            eventList={this.state.eventList}
          />
        </div>
      </div>);
  }
}

export default AppMain;
