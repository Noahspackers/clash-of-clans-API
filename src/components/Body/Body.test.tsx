import React from 'react';
import ReactDOM from 'react-dom';
import Body from './Body';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Body />, div);
  ReactDOM.unmountComponentAtNode(div);
});