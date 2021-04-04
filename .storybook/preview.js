import { addDecorator } from '@storybook/react';
import React from 'react';

import GlobalStyles from './../src/styles/globalStyles';

function withGlobalStyles(storyFn) {
  return (
    <React.Fragment>
      <GlobalStyles />
      {storyFn()}
    </React.Fragment>
  );
}

addDecorator(withGlobalStyles);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
