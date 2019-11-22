import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../../components/api/api-homepage';
import './deleteThoroughlyWrap.scss';
class DeleteThoroughly extends React.Component {
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
        <div className={'deleteThoroughly-content'}>

        </div>
        <footer>
          <ul>
            <li>删除</li>
            <li>恢复</li>
          </ul>
        </footer>
      </div>

    )
  }
}
export default DeleteThoroughly;