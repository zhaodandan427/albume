//相册浏览
import React from 'react';
import { Link } from 'react-router-dom'
// import bg1 from '../photoBrowsing/1.jpg';
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
  onDown() {
    this.setState({
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
    });
  }

  onUp() {
    this.setState({
      data: [
        ...this.state.data,
        {
          name: '本周',
          lists: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        },
        {
          name: '本月',
          lists: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        },
      ]

    });
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
          <PullLoad />
          {/* <IscrollLuo
            id='test'
            onPullDownRefresh={() => this.onDown()}
            onPullUpLoadMore={() => this.onUp()}
          >
            {
              this.state.data.map((s, i) => {
                return <div key={'js' + i}>
                  <h3>{s.name}</h3>
                  <ul>
                    {
                      s.lists.map((item, j) => {
                        return <li key={'js' + j}><img src={bg1} alt='' /></li>
                      })
                    }
                  </ul>
                </div>
              })
            }

          </IscrollLuo> */}


        </div>
      </div >
    )
  }
}
export default PhotoBrowsing;