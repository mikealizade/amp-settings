import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import guitarists from './guitarists';
import Selector from './Selector';

configure({ adapter: new Adapter() });

describe('<Selector>', () => {
  let component = '';
  const selectGuitarist = jest.fn();
  const result = [{
    name: 'Jimmy Hendrix',
    song: 'Purple Haze',
    gain: 7.5,
    treble: 6.5,
    mid: 9,
    bass: 6,
    volume: 7,
    reverb: 3
  }];

  beforeEach(() => {
    component = shallow(<Selector selectGuitarist={selectGuitarist} allGuitarists={guitarists} />);
  });

  it('filters a list of names based on user input', () => {
    component.find('input').simulate('change', { target: { value: 'x' } });
    expect(component.state().guitarists).toEqual(result);
    expect(component.state().isActive).toEqual(true);
  });
});
