
import React from 'react';
import { Link } from 'react-router-dom'
import './homepage.scss';
import * as api from '../../components/api/api-homepage';
import Picture from '../../components/homePicture/homePicture';
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTime: true,
      showCommon: true,
      sortingPoint: true,
      show: false
    };
    this.list = [
      { name: '创建相册', pathname: 'createAlbum' },
      { name: '帮助', pathname: 'help' },
      { name: '垃圾篓', pathname: 'garbageBasket' },
    ]


  }
  /*事件--------------------start */

  //返回轻应用页面
  goComBack() {

  }
  //时间
  sortingTime() {
    let flag = !this.state.showTime;
    this.setState({
      showTime: flag
    })
    if (flag) {//升序

    }
    else if (!flag) {//降序

    }
  }
  //评论
  sortinCommon() {
    let flag = !this.state.showCommon;
    this.setState({
      showCommon: flag
    })
    if (flag) {//升序

    }
    else if (!flag) {//降序

    }
  }
  //点赞
  sortingPoint() {
    let flag = !this.state.sortingPoint;
    this.setState({
      sortingPoint: flag
    })
    if (flag) {//升序

    }
    else if (!flag) {//降序

    }
  }
  //点击出现创建相册。。。。。
  select() {
    let flag = !this.state.show;
    this.setState({
      show: flag
    })
  }
  //点击取消
  cancel() {
    this.header.style.display = 'block'
    this.searchWrap.style.display = 'none'
  }
  //搜索框
  search() {
    this.header.style.display = 'none'
    this.searchWrap.style.display = 'block'
  }
  //input框
  searchHandler(ev) {
    let text = ev.target.value;
    console.log(text)
  }
  //获取焦点
  inputOnFocus() {
    this.deleteRef.style.opacity = 1
  }
  //点击X号清空input的value值
  clear() {
    this.inputRef.value = '';
    this.deleteRef.style.opacity = 0
  }

  /*事件------------------------------end */


  //数据渲染
  render() {
    const flag0 = this.state.showTime;
    const flag1 = this.state.showCommon;
    const flag2 = this.state.sortingPoint;
    const flag = this.state.show;
    return (
      <div className={'hompage-wrap'}>
        <div className={'homepage-items'} ref={ref => this.header = ref} style={{
          display: 'block'
        }}>
          <header>
            <span onClick={this.goComBack.bind(this)}></span>
            <span>活动相册</span>
            <span className={'search'} onClick={this.search.bind(this)}></span>
            <span className={'select'} onClick={this.select.bind(this)}></span>
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
          </header>
          <ul className={'sort-wrap'}>
            <li><span>时间</span><span onClick={this.sortingTime.bind(this)} className={flag0 ? 'hidei' : 'showi'}></span></li>
            <li><span>评论</span><span onClick={this.sortinCommon.bind(this)} className={flag1 ? 'hidei' : 'showi'}></span></li>
            <li><span>点赞</span><span onClick={this.sortingPoint.bind(this)} className={flag2 ? 'hidei' : 'showi'}></span></li>
          </ul>
        </div>
        <div className={'content'}>
          <Picture ref={ref => this.pictureList = ref} />
        </div>
        
        <div className={'search-wrap'} ref={ref => this.searchWrap = ref} style={{
          display: 'none'
        }}>
          <input type="text" name="search"
            onChange={this.searchHandler.bind(this)}
            onFocus={this.inputOnFocus.bind(this)}
            ref={ref => this.inputRef = ref}
          />
          <span className={'delete'}
            ref={ref => this.deleteRef = ref}
            style={{ opacity: 0 }}
            onClick={this.clear.bind(this)}
          >
          </span>
          <span onClick={this.cancel.bind(this)}>取消</span>
        </div>
      </div >
    )
  }


  _tokens = [];
  _clearTokens() {
    this._tokens.forEach((token) => token.cancel());
    this._tokens = [];
  }

  componentDidMount() {
    const me = this;
    me._tokens.push(api.pictureList.send({
    }).then(res => {
      if (res.code === 200) {
        this.pictureList._setData(res.data)
      }
    }))
  }


  componentWillUnmount() {
    this._clearTokens();
  }
}
export default HomePage;