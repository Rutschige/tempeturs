import React from 'react';
import ReactDOM from 'react-dom';
import JobBoard from '../pages/JobBoard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<JobBoard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
