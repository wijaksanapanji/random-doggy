import React from 'react';
import { getByText, render } from '@testing-library/react';

import Dog from '../components/Dog';

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dog />);
    expect(baseElement).toBeTruthy();
    expect(getByText(baseElement, 'Random Doggies 🐶!'));
  });
});
