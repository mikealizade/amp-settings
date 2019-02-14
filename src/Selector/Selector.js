import React from 'react';
import { SongSelector } from '../SongSelector/SongSelector';
import './Selector.scss';

export default class Selector extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      guitarists: [],
      isActive: false,
      placeholder: 'Type guitarist\'s name'
    };
  }

  searchGuitarists = ({ target: { value } }) => {
    const guitarists = this.props.allGuitarists.filter(({ name }) => value && name.toLowerCase().includes(value.toLowerCase()));
    this.setState({
      guitarists,
      isActive: guitarists.length > 0
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
    const { songs, selectSong, prevSongs } = this.props;

    return (
      <div className='guitarists'>
        <div className='guitarists-container'>
          <input type='text' placeholder={placeholder} onChange={this.searchGuitarists} ref={el => { this.input = el; }} defaultValue='' />
          <ul className={`guitarist-list${isActive ? ' active' : ''}`}>
            {
              guitarists.map((guitarist, i) => {
                const { name } = guitarist;
                return <li key={`${name}-${i}`} onClick={this.selectGuitarist(guitarist)}>{ name }</li>;
              })
            }
          </ul>
        </div>
        {(songs.length || prevSongs) &&
        <SongSelector songs={songs.length ? songs : prevSongs} selectSong={selectSong} />
        }
      </div>
    );
  }
}
