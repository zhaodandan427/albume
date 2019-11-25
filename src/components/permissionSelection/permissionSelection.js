import React from 'react';
import headPortrait from './user.jpg';
import './permissionSelection.scss';
class PermissionSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedList: [],
      checkedAll: false,//全选
    }
  }
  _setData(d) {
    this.setState({
      data: d
    })
  }
  //点击列表上升下降
  slide(index) {
    let _flag = this.state.checkedList;
    _flag[index] = !_flag[index];
    this.setState({
      checked: _flag
    })
  }
  //全选
  handleAllChange() {
    console.log(11111)
  }
  //单个的选取
  selected = (e, number) => {
    e.checked = !e.checked;
    let data = this.state.data;
    let checked = data[number].childs.map((s, i) => { return s.checked });
    this.setState({
      checked: e.checked,
    })
  }
  _addList() {
    if (!this.state.data) { return };
    let datas = this.state.data;
    return datas.map((s, index) => {
      this.state.checkedList.push(false);

      if (!s.childs) { return };
      let children = s.childs;
      return <li key={s.title} className={'clearfix'}>
        <p onClick={this.slide.bind(this, index)}>
          <span >{s.title}</span>
          <i className={this.state.checkedList[index] ? 'showi' : 'hidei'} ></i>
        </p>
        <input type='checkbox' className={'e-selfecheckbox'} onChange={this.handleAllChange.bind(this, s)} />
        <ol className={`mailList-secondContent ${this.state.checkedList[index] ? 'slideups' : 'slidedowns'}`}>
          {
            children.map((item, number) => {
              return <li key={item.num}>
                <dl style={{
                  marginBottom: 0
                }}>
                  <dt>
                    <img src={headPortrait} alt='' />
                  </dt>
                  <dd>
                    <span className={'userName'}>张委员</span><br />
                    <span className={'userNum'}>12300</span>
                  </dd>
                  <input type='checkbox' className={'e-selfecheckbox'} checked={item.checked} onChange={this.selected.bind(this, item, number)} />
                </dl>
              </li>
            })
          }
        </ol>
      </li>
    })
  }
  render() {
    return (
      <div className={'mailList-wrap'}>
        <ul className={'mailList-firstContent'}>
          {this._addList()}
        </ul>

      </div>
    )
  }
}
export default PermissionSelection;