
import React from 'react';
import './homepage.scss';
import Picture from '../../components/homePicture/homePicture';
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTime: true,
      showCommon: true,
      sortingPoint: true
    };
    this.list = ["时间", "评论", "点赞"]

  }
  //返回轻应用页面
  goComBack() {

  }
  //时间、时间
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
  render() {
    const flag0 = this.state.showTime;
    const flag1 = this.state.showCommon;
    const flag2 = this.state.sortingPoint;
    return (
      <div className={'hompage-wrap'}>
        <div className={'homepage-items'}>
          <header>
            <span onClick={this.goComBack.bind(this)}></span>
            <span>活动相册</span>
            <span className={'search'}></span>
            <span className={'select'}></span>
          </header>
          <ul className={'sort-wrap'}>
            <li><span>时间</span><span onClick={this.sortingTime.bind(this)} className={flag0 ? 'hidei' : 'showi'}></span></li>
            <li><span>评论</span><span onClick={this.sortinCommon.bind(this)} className={flag1 ? 'hidei' : 'showi'}></span></li>
            <li><span>点赞</span><span onClick={this.sortingPoint.bind(this)} className={flag2 ? 'hidei' : 'showi'}></span></li>
          </ul>
        </div>
        <div className={'content'}>
          <Picture />
        </div>
      </div>
    )
  }
}
export default HomePage;