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
      userInput: 94123,
    };
    this.render = this.render.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.handleUserSubmit = this.handleUserSubmit.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.markerClick = this.markerClick.bind(this);
  }
  componentDidMount() {
    this.fetchData(this.state.userInput, '');
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

  handleUserInput(val) {
    this.setState({
      userInput: val,
    });
  }

  handleUserSubmit() {
    const zip = this.state.userInput;
    this.fetchData(zip, '');
  }
  markerClick(val) {
    console.log('clicked!', val);
  }

  render() {
    return (
      <div>
        <div className="header">LOCALE</div>
        <div className="navBar">
          <input className="inputBox" type="text" placeholder="enter your zip..." onChange={(evt) => { this.handleUserInput(evt.target.value) }} />
          <div className="submitBtn" onClick={this.handleUserSubmit}>submit</div>
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
            markerClick={this.markerClick}
          />
        </div>
      </div>);
  }
}

export default AppMain;
