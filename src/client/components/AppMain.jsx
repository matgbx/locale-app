import React from 'react';

class AppMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tbc: 'doggo',
    };
  }
  componentDidMount() {

  }
  render() {
    return (<div>
      <h2>Hello from React!</h2>
    </div>);
  }
};

export default AppMain;