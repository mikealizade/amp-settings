import React from 'react'
import Guitarists from './guitarists'
import './Selector.scss';

export default class Selector extends React.Component {
  constructor (props) {
    super(props)
    this.searchGuitarists = this.searchGuitarists.bind(this)
    this.selectGuitarist = this.selectGuitarist.bind(this)

    this.state = {
      guitarists: [],
      isActive: false,
      placeholder:  'Start typing the guitarist\'s name'
    }
  }

  searchGuitarists(e){
    let entry = e.target.value
    let items = Guitarists.filter((item, i) => entry !== '' && item.name.toLowerCase().indexOf(entry.toLowerCase()) !== -1)
    this.setState({
      guitarists: items,
      isActive: items.length > 0
    })
  }

  selectGuitarist(guitarist){
    this.props.selectGuitarist(guitarist)
    this.setState({
      isActive: false,
      placeholder: ''
    })
    this.input.value = ''
    this.input.focus()
  }

  render() {
    const { isActive } = this.state

    return (<div className="guitarists">
      <input type="text" placeholder={this.state.placeholder} onChange={this.searchGuitarists} ref={el => this.input = el} defaultValue=''/>
      <ul className={isActive ? 'active' : ''}>{
        this.state.guitarists.map((guitarist, i) => {
          return <li key={i} onClick={() => {this.selectGuitarist(guitarist)}}>{guitarist.name}</li>
        })
      }
      </ul>
    </div>)
  }
}
