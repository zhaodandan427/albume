//相册浏览
import React from 'react';
import { Link } from 'react-router-dom'
import './photoBrowsing.scss';
import bg1 from './1.jpg';
import LikeBtn from '../../components/point/point';
class PhotoBrowsing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9]
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
  //点击全文
  all() {
    this.text.innerHTML = '活动文案活动文案活动文案活动文案活动文案活动 文案活动文案活动文案活动文案活活动文案活动文案活动文案活动文案活动文案活动 文案活动文案活动文案活动文案活'
    this._all.style.opacity = 0
  }
  //点击更多
  moreClick() {

  }
  //点击评论
  commentClick() {

  }

  inputBlurHandle() {

  }
  /*事件-----------------------end*/
  render() {
    const flag = this.state.show;
    let id = this.props.match.params.id;
    return (
      <div className={'photoBrowsing'}>
        <header>
          <Link to='/'></Link>
          相册浏览
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
        <div className={'detail-album'} ref={ref => this.detailAlbum = ref} style={{
          display: 'block'
        }}>
          <p ref={ref => this.text = ref}>活动文案活动文案活动文案活动文案活动文案活动 文案活动文案活动文案活动文案活...
            <span ref={ref => this._all = ref}
              style={{
                opacity: 1
              }}
              onClick={this.all.bind(this)}>全文</span>
          </p>
          <div className={'picture-list'}>
            <ul>
              {
                this.state.data.map((s, i) => {
                  return <li key={'js' + i}><img src={bg1} alt='' /></li>
                })
              }
              < span className={'more'}><Link to={{
                pathname: `/moreAlbum/${id}`,
              }}>更多</Link></span>
            </ul>

          </div>
          <div className={'comment-wrap'}>
            <h4 className={'timer'}>2019-10-12</h4>
            <div className={'comment-like'}>
              <span className={'comment-items'}><i></i>评论(1000)</span>
              <input onBlur={this.inputBlurHandle} />
              <LikeBtn />
            </div>
           
          </div>
          <div className={'dialog-content'}>
              <p>张委员</p>
              <ul>
                <li>李委员说：xxxxxxxxxx</li>
                <li>李委员说：xxxxxxxxxx</li>
                <li>李委员说：xxxxxxxxxx</li>
                <li>李委员说：xxxxxxxxxx</li>
                <li>李委员说：xxxxxxxxxx</li>
                <li>李委员说：xxxxxxxxxx</li>
                <li>李委员说：xxxxxxxxxx</li>
                <li>李委员说：xxxxxxxxxx</li>
                <li>李委员说：xxxxxxxxxx</li>
                <li>李委员说：xxxxxxxxxx</li>
                <li>李委员说：xxxxxxxxxx</li>
                <li>李委员说：xxxxxxxxxx</li>
                <li>李委员说：xxxxxxxxxx</li>
                <li>李委员说：xxxxxxxxxx</li>
                <li>李委员说：xxxxxxxxxx</li>
                <li>李委员说：xxxxxxxxxx</li>
                <li>李委员说：xxxxxxxxxx</li>
                <li>李委员说：xxxxxxxxxx</li>
                <li>李委员说：xxxxxxxxxx</li>
                <li>李委员说：xxxxxxxxxx</li>
                <li>李委员说：xxxxxxxxxx</li>
                <li>李委员说：xxxxxxxxxx</li>
                <li>李委员说：xxxxxxxxxx</li>
                <li>李委员说：xxxxxxxxxx</li>
              </ul>
            </div>
        </div>
      </div >
    )
  }
}
export default PhotoBrowsing;