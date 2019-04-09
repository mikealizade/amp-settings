import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import guitarists from './guitarists';
import { Selector } from './Selector';

configure({ adapter: new Adapter() });

describe('<Selector>', () => {
  let component = '';
  const selectGuitarist = jest.fn();
  const result = [{
    name: 'Jimmy Page',
    songs: [{
      band: 'Led Zeppelin',
      song: 'Whole Lotta Love',
      gain: 7,
      treble: 3,
      mid: 7,
      bass: 6,
      volume: 5,
      reverb: 5
    }]
  }];

  beforeEach(() => {
    component = shallow(<Selector selectGuitarist={selectGuitarist} allGuitarists={guitarists} songs={result} />);
  });

  it('filters a list of names based on user input', () => {
    component.find('input').simulate('change', { target: { value: 'pag' } });
    expect(component.state().guitarists).toEqual(result);
    expect(component.state().isActive).toEqual(true);
  });
});
