import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../../components/api/api-homepage';
import './deleteThoroughlyWrap.scss';
import SelectAll from '../../components/selectAll/selectAll';
import Dialog from '../../components/dialog/againDialog';
class DeleteThoroughly extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: [false, false]
    }
  }
  _tokens = [];
  _clearTokens() {
    this._tokens.forEach((token) => token.cancel());
    this._tokens = [];
  }

  componentDidMount() {
    const me = this;

  }
  //点击删除
  deleteClick() {
    let _flag = this.state.flag;
    if (_flag) {
      this.dialogRef._open(); //出现弹框
    }
  }
  //恢复
  refSove() {
    console.log(88888)
  }
  //确认
  confirm() {

  }
  componentWillUnmount() {
    this._clearTokens();
  }
  render() {
    let id = this.props.match.params.id;
    return (
      <div className={'createAlbum-wrap deleteThoroughly-wrap'}>
        <header>
          <Link to={{
            pathname: `/garbageBasket/${id}`
          }}></Link>
          垃圾篓
        </header>
        <div className={'  mangePhone-content deleteThoroughly-content'}>
          <SelectAll />
        </div>
        <Dialog ref={(ref) => (this.dialogRef = ref)} onSure={this.confirm.bind(this)} />
        <footer>
          <ul>
            <li onClick={this.deleteClick.bind(this)}>删除</li>
            <li onClick={this.refSove.bind(this)}>恢复</li>
          </ul>
        </footer>
      </div>

    )
  }
}
export default DeleteThoroughly;