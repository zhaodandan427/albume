import React from 'react';
import BScroll from 'better-scroll'
export default class Commodity extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  refreshAlert(text) {
    text = text || '操作成功';
    alert.innerHtml = text;
    alert.style.display = 'block';
    setTimeout(function () {
      alert.style.display = 'none';
    }, 1000);
  }
  reloadData() {
    var template = '<li class="list-item"><div class="avatar"><img src="img/1.png" width="100" height="100" /></div>' +
      '<div class="text"><h2>只会放肆,不会说谎,好青春也是谁不想要一个深情却刺激</h2><span>2016-11-23</span></div></li>'
    // 向ul容器中添加内容
    this.listContent.innerHTML = this.listContent.innerHTML + template;
  }
  innitScroll() {
    let wrapper = this.wrapper;
    let scroll = new BScroll(wrapper);
    scroll.on('scroll', function (position) {
      if (position.y > 30) {
        this.topTip.innerText = '释放立即刷新';
      }
    });
    scroll.on('touchend', function (position) {
      if (position.y > 30) {

        setTimeout(function () {
          /*
           * 这里发送ajax刷新数据
           * 刷新后,后台只返回第1页的数据,无论用户是否已经上拉加载了更多
          */
          // 恢复文本值
          this.topTip.innerText = '下拉刷新';
          // 刷新成功后的提示
          refreshAlert('刷新成功');
          // 刷新列表后,重新计算滚动区域高度
          scroll.refresh();
        }, 1000);
      } else if (position.y < (this.maxScrollY - 30)) {
        this.bottomTip.innerText = '加载中...';
        setTimeout(function () {
          // 恢复文本值 
          this.bottomTip.innerText = '查看更多';
          // 向列表添加数据
          reloadData();
          // 加载更多后,重新计算滚动区域高度
          scroll.refresh();
        }, 1000);
      }
    });
  }
}
componentDidMount() {
  this.innitScroll()
}
render() {
  const { Bscroll } = this.state
  return (
    <div class="wrapper" ref={ref => this.wrapper = ref}>
      <div className="top-tip" ref={ref => this.topTip = ref}>
        <span class="refresh-hook">下拉刷新</span>
      </div>
      <ul className={"list-content list-content-hook"} ref={ref => this.listContent = ref}>
        <li>111111111111111</li>
        <li>111111111111111</li>
        <li>111111111111111</li>
        <li>111111111111111</li>
        <li>111111111111111</li>
      </ul>
      <div className={"bottom-tip"} ref={ref => this.bottomTip = ref}>
        <span class="loading-hook">查看更多</span>
      </div>
    </div>
  )
}
}
