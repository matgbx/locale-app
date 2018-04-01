import React from 'react';
import { render } from 'react-dom';
import AppMain from './components/AppMain';

const eventArr = [
  {
    title: 'Garage Sale',
    location: { latitude: 37.80892339017598, longitude: -122.41117094525059 },
    description: 'Sit consequuntur quis quibusdam. Dolores quidem eaque enim aut qui qui blanditiis optio nostrum. Sint consequatur qui nesciunt velit mollitia voluptatem odio.',
    time: '6pm - 9pm',
    date: '2018-04-03',
  },
];

render(<AppMain events={eventArr} />, document.getElementById('app'));
