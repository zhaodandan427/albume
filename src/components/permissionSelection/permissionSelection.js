import React from 'react';
import headPortrait from './user.jpg';
import './permissionSelection.scss';
import { __values } from 'tslib';
class PermissionSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedList: [],
      value: []
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
  handleAllChange(e, index) {
    e.checked = !e.checked;
    let data = this.state.data;
    if (e.checked == true) {
      data[index].childs.map((s, i) => { s.checked = true });
      data[index].childs.map((s, i) => { return this.state.value.push(s.name) })
    } else {
      data[index].childs.map((s, i) => { s.checked = false });
      data[index].childs.map((s, i) => { return this.state.value = [] })
    }

    this.setState({
      checked: e.checked,
    })
    this.props.selectAll(this.state.value)

  }
  //单个的选取
  selected = (e, index, number) => {
    e.checked = !e.checked;
    console.log(e.checked)
    let val = e.name;

    if (e.checked === true) {
      this.state.value.push(val)
    } else {
      this.state.value = []
    }
    this.setState({
      checked: e.checked,
      value: this.state.value
    })
    console.log(this.state.value)
    this.props.singSelect(this.state.value)
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
        <input type='checkbox' value={this.state.value || ''} className={'e-selfecheckbox'} checked={s.checked} onChange={this.handleAllChange.bind(this, s, index)} />
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
                    <span className={'userName'}>{item.name}</span><br />
                    <span className={'userNum'}>{item.num}</span>
                  </dd>
                  <input type='checkbox' value={this.state.value || ''} className={'e-selfecheckbox'} checked={item.checked} onChange={this.selected.bind(this, item, index, number)} />
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