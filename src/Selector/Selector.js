import React from 'react';
// import Guitarists from './guitarists';
import './Selector.scss';

export default class Selector extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      guitarists: [],
      isActive: false,
      placeholder: 'Start typing the guitarist\'s name'
    };
  }

  searchGuitarists = ({ target: { value } }) => {
    const items = this.props.allGuitarists.filter((item, i) => value !== '' && item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    this.setState({
      guitarists: items,
      isActive: items.length > 0
    });
  }

  selectGuitarist = guitarist => () => {
    this.props.selectGuitarist(guitarist);
    this.setState({
      isActive: false,
      placeholder: ''
    });
    this.input.value = '';
    this.input.focus();
  }

  render () {
    const { isActive, placeholder, guitarists } = this.state;

    return (<div className='guitarists'>
      <input type='text' placeholder={placeholder} onChange={this.searchGuitarists} ref={el => { this.input = el; }} defaultValue='' />
      <ul className={isActive ? 'active' : ''}>
        {
          guitarists.map((guitarist, i) => {
            const { _id, name } = guitarist;
            return <li key={_id} onClick={this.selectGuitarist(guitarist)}>{ name }</li>;
          })
        }
      </ul>
    </div>);
  }
}
