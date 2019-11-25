import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../../../components/api/api-jurisdiction';
import Maillist from '../../../components/permissionSelection/permissionSelection';
class Meeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  _tokens = [];
  _clearTokens() {
    this._tokens.forEach((token) => token.cancel());
    this._tokens = [];
  }

  componentDidMount() {
    const me = this;
    me._tokens.push(api.mailList.send({
    }).then(res => {
      if (res.code === 200) {
        this.mailListRef._setData(res.data)
      }
    }))
  }
  componentWillUnmount() {
    this._clearTokens();
  }
  //多选
  singVal(e) {
    // console.log(e)
  }
  //全选
  _allValue(e) {
    // console.log(e)
  }
  render() {
    return (
      <div className={'createAlbum-wrap meeting-wrap'}>
        <header>
          <Link to={'/jurisdiction'}></Link>
          会议选择
        <Link to={'/jurisdiction'}><span>完成</span></Link>
        </header>
        <div className={'meeting-content'}>
          <Maillist ref={ref => this.mailListRef = ref} singSelect={this.singVal.bind(this)} selectAll={this._allValue.bind(this)} />
        </div>
      </div>
    )
  }
}
export default Meeting;