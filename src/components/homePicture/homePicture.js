import React from 'react';
import './picture.scss';
import picture from './1.png';
class Picture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { time: '本周', title: '第十届委员会精彩瞬间指的流年，同志们欢迎点赞评论', img: '' },
        // { time: '8月', title: '第十届委员会精彩瞬间指的流年，同志们欢迎点赞评论', img: '' },
        // { time: '7月', title: '第十届委员会精彩瞬间指的流年，同志们欢迎点赞评论', img: '' },
        // { time: '6月', title: '第十届委员会精彩瞬间指的流年，同志们欢迎点赞评论', img: '' },
      ]
    }

  }
  routerTo(v) {
    console.log(this.props)
    this.props.history.push({ pathname: `/photoBrowsing` })
  }
  _addList() {
    // if (!this.state.data) { return };
    return this.state.data.map((s, i) => {
      return <li key={'jx' + i}>
        <h3>{s.time}</h3>
        <p>
          <span>{s.title}</span>
          <img alt='' src={picture} onClick={() => this.routerTo(i)} />
        </p>
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
