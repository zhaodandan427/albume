//相册浏览
import React from 'react';
import { Link } from 'react-router-dom'
import bg1 from '../photoBrowsing/1.jpg';
import PullLoad from '../../components/pullLoading/pullLoding';
class PhotoBrowsing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      data: [
        {
          name: '本周',
          lists: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        },
        {
          name: '本月',
          lists: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        },
      ]
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

  imgPic(currentIndex, imageArray) {
    var options = {
      index: currentIndex
    }

    var pswpElement = this.refs.pswb;
    var gallery = new PhotoSwipe(pswpElement, UI, items, options)
    gallery.init()
  }

  /*事件-----------------------end*/
  render() {
    const flag = this.state.show;
    let id = this.props.match.params.id;
    return (
      <div className={'more-album'}>
        <header>
          <Link to={{
            pathname: `/photoBrowsing/${id}`
          }}></Link>
          相册浏览
          <span onClick={this.select.bind(this)}></span>
        </header>
        <div className={`dialog-wrap ${flag ? 'slidedown' : 'slideup'} `} >
          <ul>
            {
              this.list.map((s, i) => {
                return <li key={'zl' + i}>
                  <Link to={`/${s.pathname}/${id}`}>{s.name}</Link>
                </li>
              })
            }
          </ul>
        </div>
        <div className={'picture-detail'}>
          {/* <PullLoad /> */}
          <ul>
            {
              this.list.map((s, i) => {
                return <li key={'jsx' + i}><img src={bg1} onClick={this.imgPic.bind(this, i)} /></li>
              })
            }
          </ul>

        </div>
        <div className="pswp" ref="pswb" role="dialog" aria-hidden="true">
          <div className="pswp__bg"></div>
          <div className="pswp__scroll-wrap">
            <div className="pswp__container">
              <div className="pswp__item"></div>
              <div className="pswp__item"></div>
              <div className="pswp__item"></div>
            </div>
            <div className="pswp__ui pswp__ui--hidden">
              <div className="pswp__top-bar">
                <div className="pswp__counter"></div>
                <button className="pswp__button pswp__button--close" title="Close (Esc)"></button>
                <div className="pswp__preloader">
                  <div className="pswp__preloader__icn">
                    <div className="pswp__preloader__cut">
                      <div className="pswp__preloader__donut"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div className="pswp__share-tooltip"></div>
              </div>
              <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
              </button>
              <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
              </button>
              <div className="pswp__caption">
                <div className="pswp__caption__center"></div>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}
export default PhotoBrowsing;