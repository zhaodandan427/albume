import React from 'react';
import { Link } from 'react-router-dom';
import './mangePhone.scss';
import SelectAll from '../../components/selectAll/selectAll';
import Dialog from '../../components/dialog/againDialog';
class ManagePhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: [false, false]
    };
  }

  //点击删除
  delete() {
    let _flag = !this.state.flag[0];
    console.log(_flag)
    if (_flag) {
      this.dialogRef._open(); //出现弹框
    }
  }
  //点击确认按钮
  confirm() {
  }
  getAllSelected() {
    let selected = [];
    for (let item in this.refs) {
      if (this.refs[item].className === 'default') {
        selected.push(this.refs[item]);
      }
    }
    return selected;
  }

  /**事件-------------------end */


  render() {
    let id = this.props.match.params.id;
    return (
      <div className={'createAlbum-wrap mangePhone-wrap'}>
        <header>
          <Link
            to={{
              pathname: `/photoBrowsing/${id}`
            }}
          />
          管理相册
					<span
            style={{
              position: 'absolute',
              right: '1rem'
            }}
            onClick={this.delete.bind(this)}
          >
            删除
					</span>
        </header>
        <div className={'mangePhone-content'}>
          {/* <div
            onClick={() => {
              console.log(this.getAllSelected());
            }}
          >
            点击获取所有已选择的元素
					</div> */}
          {/* <div className={'management-album'}>{this._addList()}</div> */}
          <SelectAll />
        </div>
        <Dialog ref={(ref) => (this.dialogRef = ref)} onSure={this.confirm.bind(this)} />
      </div>
    );
  }
}
export default ManagePhotos;