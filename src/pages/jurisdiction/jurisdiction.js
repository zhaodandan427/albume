import React from 'react';
import { Link } from 'react-router-dom';
import './jurisdiction.scss';
import Radio from '../../components/button/radio';
export default class Jurisdiction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.list = [
      { title: "从通讯录选择", pathname: "mailList" },
      { title: "从会议人员选择", pathname: "meeting" }
    ];
  }
  _getValueInput(e) {
    if (e.target.value === '公开') {

    } else if (e.target.value === '部分公开') {
      let flag = !this.state.show;
      this.setState({
        show: flag
      })
    }
  }
  render() {
    const flag = this.state.show;
    return (
      <div className={'createAlbum-wrap jurisdiction-wrap'}>
        <header>
          <Link to={'/createAlbum'}></Link>
          谁可以看
        <Link to={'/createAlbum'}><span>完成</span></Link>
        </header>
        <div className={'jurisdiction-content'}>
          <Radio getValueInput={this._getValueInput.bind(this)} />
          <ul className={`choick-list ${flag ? 'slidedown' : 'slideup'}`}>
            {
              this.list.map((s, i) => {
                return <li key={'jx' + i}>
                  <Link to={`/${s.pathname}`}>{s.title}</Link>
                </li>
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
