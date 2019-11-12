//相册浏览
import React from 'react';
import { Link } from 'react-router-dom'
import './photoBrowsing.scss';
class PhotoBrowsing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.list = [
      { name: '上传照片', pathname: 'uploadAlbum' },
      { name: '管理照片', pathname: 'managePhotos' },
      { name: '垃圾篓', pathname: 'garbageBasket' },
    ]
  }
  /*事件----------------------start */
  select() {
    let flag = !this.state.show;
    this.setState({
      show: flag
    })
  }
  /*事件-----------------------end*/
  render() {
    const flag = this.state.show;
    return (
      <div className={'photoBrowsing'}>
        <header>
          <Link to='/'></Link>
          浏览相册
          <span onClick={this.select.bind(this)}></span>
        </header>
        <div className={`dialog-wrap ${flag ? 'slidedown' : 'slideup'} `} >
          <ul>
            {
              this.list.map((s, i) => {
                return <li key={'zl' + i}>
                  <Link to={`/${s.pathname}`}>{s.name}</Link>
                </li>
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
export default PhotoBrowsing;