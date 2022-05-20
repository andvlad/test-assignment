import React from 'react';
import { render } from '@testing-library/react';

import { Product } from './Product';

const productData = {
  isInternal: true,
  name: 'Hawaii Burger',
  plu: 'CAT1-0001',
  price: 0,
  productType: 1,
  quantity: 1,
  sortOrder: 0,
  subItems: [],
};

it('matches snapshot', () => {
  const { asFragment } = render(
    <Product {...productData} />
  );

  expect(asFragment()).toMatchSnapshot();
});
