import React, { Fragment } from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { shallow, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Intro } from './Intro';

configure({ adapter: new Adapter() });

describe('<Intro>', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Fragment>
          <p className='intro'>Welcome to Guitarist Amp Settings. This site aims to help guitarists find their
              favourite artists' amplifier settings with minimal fuss or effort.</p>
          <p className='intro'>Please use the feedback form for any suggestions, improvements or any amp settingscddcsdcsd
                  that you would like to see on the site.</p>
        </Fragment>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
