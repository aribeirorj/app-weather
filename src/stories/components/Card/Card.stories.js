import React from 'react';

import { Card } from '../../../components';

export default {
  title: 'app-Weather/Components/Card',
  component: Card,
};

const Template = (args) => <Card dataWeather={args} />;

export const CardView = Template.bind({});

CardView.args = {
  name: 'Icaraí',
  main: {
    temp: 30,
    temp_min: 30,
    temp_max: 25,
    pressure: 100,
    humidity: 65,
  },
  weather: [
    {
      id: 802,
      main: 'nuvens',
      description: 'Sol',
      icon: '03d',
    },
  ],
};
