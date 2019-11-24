import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../../../components/api/api-jurisdiction';
import Maillist from '../../../components/permissionSelection/permissionSelection';
class MailList extends React.Component {
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
  render() {
    return (
      <div className={'createAlbum-wrap mailList-wrap'}>
        <header>
          <Link to={'/jurisdiction'}></Link>
          通讯录选择
        <Link to={'/jurisdiction'}><span>完成</span></Link>
        </header>
        <div className={'mailList-content'}>
          <Maillist ref={ref => this.mailListRef = ref} />
        </div>
      </div>
    )
  }
}
export default MailList;