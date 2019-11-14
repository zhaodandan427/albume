import React from 'react';
import $ from 'jquery';
import bg1 from './1.png'
export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <div className={'showDiv'}>
          <img src={bg1} />
        </div>
      </div>
    )
  }
  componentDidMount() {
    this.touchScale()
  }
}