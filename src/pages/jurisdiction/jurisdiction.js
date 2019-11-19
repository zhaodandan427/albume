import React from 'react';
import { Link } from 'react-router-dom';
import './jurisdiction.scss';
import Radio from '../../components/button/radio';
export default class Jurisdiction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.list = ["从通讯录选择", "从会议人员选择"];
  }
  _getValueInput(e) {
    console.log(e.target.value)
    if (e.target.value == '公开') {

    } else if (e.target.value == '部分公开') {

    }
  }
  render() {
    return (
      <div className={'createAlbum-wrap jurisdiction-wrap'}>
        <header>
          <Link to={'/createAlbum'}></Link>
          谁可以看
        <Link to={'/createAlbum'}><span>完成</span></Link>
        </header>
        <div className={'jurisdiction-content'}>
          <Radio getValueInput={this._getValueInput.bind(this)} />
          <ul className={'choick-list'}>
            {
              this.list.map((s, i) => {
                return <li key={'jx' + i}>{s}</li>
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
