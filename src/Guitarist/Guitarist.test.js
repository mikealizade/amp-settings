import React, { Fragment } from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Guitarist>', () => {
  it('renders correctly', () => {
    const name = 'Joe Satriani';
    const song = 'Surfing With The Alien';

    const tree = renderer
      .create(
        <h1>{name && name} {name && <span>({song})</span>}</h1>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
