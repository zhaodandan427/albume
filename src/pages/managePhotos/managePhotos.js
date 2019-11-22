import React from 'react';
import { Link } from 'react-router-dom';
import './mangePhone.scss';
import picture from './1.jpg';
import Dialog from '../../components/dialog/againDialog';
class ManagePhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: '',
      data: [
        { title: '本周', childs: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
        { title: '本月', childs: [1, 2, 3, 4, 5, 6, 7, 8, 9] }
      ]
    }
  }
  /**事件-------------------start */
  //选择
  choice(index) {
    console.log(index)
    this.flags = !this.state.flag
    this.setState({
      flag: this.flags
    })
  }
  //点击单张图片
  albumClick(index,j) {
    let choicList = 'choic' + index+j;
    let choic = this.refs[choicList]
    if (this.state.flag) {
      choic.className = 'active'
    } else {
      choic.className = 'default'
    }
    this.state.flag = !this.state.flag
  }
  //点击删除
  delete() {
    if (this.state.flag) {
      this.dialogRef._open()//出现弹框
    }
  }
  //点击确认按钮
  confirm() {
    this.state.data.map((s, i) => {
      s.childs.map((item, j) => {
        console.log()
      })
    })
  }

  /**事件-------------------end */

  //render渲染数据
  _addList() {
    if (!this.state.data) { return };
    return this.state.data.map((s, i) => {
      return <div className={'management-album-list'} key={'jx' + i}>
        <h3>{s.title}</h3>
        <span className={'choice-album'} onClick={this.choice.bind(this, i)}>{this.state.flag ? '取消选择' : '选择'}</span>
        <ul ref={'list' + i}>
          {
            s.childs.map((s, j) => {
              return <li key={'sm' + j}>
                <img src={picture} alt='' ref={'album' + i} onClick={this.albumClick.bind(this,i, j)} />
                <span ref={'choic' +i+ j} className={this.state.flag ? 'default' : 'active'}
                ></span>
              </li>
            })
          }
        </ul>

      </div>
    })
  }
  render() {
    let id = this.props.match.params.id;
    return (
      <div className={'createAlbum-wrap mangePhone-wrap'}>
        <header>
          <Link to={{
            pathname: `/photoBrowsing/${id}`
          }}></Link>
          管理相册
        <span style={{
            position: 'absolute',
            right: '1rem'
          }} onClick={this.delete.bind(this)}>删除</span>
        </header>
        <div className={'mangePhone-content'}>
          <div className={'management-album'}>
            {
              this._addList()
            }
          </div>
        </div>
        <Dialog ref={ref => this.dialogRef = ref} onSure={this.confirm.bind(this)}></Dialog>
      </div>
    )
  }
}
export default ManagePhotos;