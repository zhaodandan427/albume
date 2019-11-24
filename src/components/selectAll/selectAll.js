import React from 'react';
import picture from './1.jpg';
class SelectAll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: [false, false],
      data: [
        {
          title: '本周', childs: [
            {
              "img1": '',
              flag: false,
              id: 0
            },
            {
              "img2": '',
              flag: false,
              id: 1
            },
            {
              "img3": '',
              flag: false,
              id: 2
            }
          ]
        },
        {
          title: '本月', childs: [
            {
              "img1": '',
              flag: false,
              id: 0
            },
            {
              "img2": '',
              flag: false,
              id: 1
            },
            {
              "img3": '',
              flag: false,
              id: 2
            }
          ]
        }
      ]
    }
  }
  _setData(d) {
    this.setState({
      data: d
    })
  }
  //选择
  choice(index) {
    let _flag = this.state.flag;
    _flag[index] = !_flag[index];
    this.setState({
      flag: _flag
    });
  }
  //点击单张图片
  albumClick(s,index, j) {
    console.log(s.flag)
    s.flag=!s.flag;
    this.setState({
      
    })
    let choicList = 'choic' + index + j;
    let choic = this.refs[choicList];
    if (choic.className === 'default') {
      choic.className = 'active';
    } else {
      choic.className = 'default';
    }
  }
  _addList() {
    const me = this;
    if (!me.state.data) {
      return;
    }
    
    return me.state.data.map((s, i) => {
      return (
        <div className={'management-album-list'} key={'jx' + i}>
          <h3>{s.title}</h3>
          <span className={'choice-album'} onClick={this.choice.bind(this, i)}>
            {this.state.flag[i] ? '取消选择' : '选择'}
          </span>
          <ul ref={'list' + i}>
            {s.childs.map((s, j) => {
              return (
                <li key={'sm' + j}>
                  <img
                    src={picture}
                    alt=""
                    ref={'album' + i}
                    onClick={this.albumClick.bind(this,s, i, j)}
                  />
                  <span ref={'choic' + i + j} className={s.flag ? 'default' : 'active'} />
                </li>
              );
            })}
          </ul>
        </div>
      )
    })
  }
  render() {
    return (
      <div>
        <div className={'management-album'}>{this._addList()}</div>
      </div>
    )
  }
}
export default SelectAll;