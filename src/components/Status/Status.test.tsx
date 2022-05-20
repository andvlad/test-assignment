import React from 'react';
import { render } from '@testing-library/react';

import { Status } from './Status';

it('matches snapshot', () => {
  const { asFragment } = render(
    <Status value={1} />
  );

  expect(asFragment()).toMatchSnapshot();
});
