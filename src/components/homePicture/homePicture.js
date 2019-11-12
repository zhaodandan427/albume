import React from 'react';
import { Link } from 'react-router-dom'
import './picture.scss';
import picture from './1.png';
class Picture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  _setData(d) {
    this.setState({
      data: d
    })
  }
  _addList() {
    if (!this.state.data) { return };
    return this.state.data.map((s, i) => {
      return <li key={'jx' + i}>
        <h3>{s.date}</h3>
        <div>
          <span>{s.title}</span>
          <Link to={{
            pathname: `/photoBrowsing/${i}`,
            state: 'hello',
          }}><img alt='' src={picture} />
          </Link>
          <div className={'footer-bom'}>
            <span className={'timer'}>{s.time}</span>
            <span className={'comment'}><i></i>评论 ({s.comment})</span>
            <span className={'fabulous'}><i></i>点赞 ({s.fabulous})</span>
          </div>
        </div>
      </li>
    })
  }
  render() {
    return (
      <div>
        <ul className={'content-area'}>
          {this._addList()}
        </ul>
      </div>
    )
  }
}
export default Picture;
