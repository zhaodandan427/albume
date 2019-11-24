import React from 'react';
import headPortrait from './user.jpg';
import './permissionSelection.scss';
class PermissionSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      check: false,
      checks: false,
    }
  }
  _setData(d) {
    this.setState({
      data: d
    })
  }
  slide(index) {
    let _flag = this.state.checked;
    _flag[index] = !_flag[index];
    this.setState({
      checked: _flag
    })
  }
  //全选
  showInput = (e) => {//全选和全不全
    console.log(e.target.checked);
    this.setState({
      check: e.target.checked,
      checks: e.target.checked,
    })
  }

  _addList() {
    const flag = this.state.show;
    if (!this.state.data) { return };
    let datas = this.state.data;
    return datas.map((s, index) => {
      this.state.checked.push(false)

      if (!s.childs) { return };
      let children = s.childs;
      return <li key={s.title}>
        <p onClick={this.slide.bind(this, index)}>
          <span >{s.title}</span>
          <i className={this.state.checked[index] ? 'showi' : 'hidei'} ></i>
        </p>
        <input type='checkbox' className={'e-selfecheckbox'} checked={this.state.check} onChange={this.showInput} />
        <ol className={`mailList-secondContent ${this.state.checked[index] ? 'slideups' : 'slidedowns'}`}>
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
                  <input type='checkbox' className={'e-selfecheckbox'} checked={this.state.checks} />
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