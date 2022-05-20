import React from 'react';
import { render } from '@testing-library/react';

import { Collapse } from './Collapse';

it('matches snapshot', () => {
  const { asFragment } = render(
    <Collapse label="Payment">
      5000
    </Collapse>
  );

  expect(asFragment()).toMatchSnapshot();
});
