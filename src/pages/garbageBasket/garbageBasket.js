import React from 'react';
import { Link } from 'react-router-dom';
import './garbageBasket.scss';
import * as api from '../../components/api/api-homepage';
import DeletePicture from '../../components/deletePicture/deletePicture';
class GarbageBasket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  /*退回事件 */
  goBack(){
    console.log(this.props.history)
    this.props.history.goBack();

  }
  _tokens = [];
  _clearTokens() {
    this._tokens.forEach((token) => token.cancel());
    this._tokens = [];
  }

  componentDidMount() {
    const me = this;
    me._tokens.push(api.pictureList.send({
    }).then(res => {
      if (res.code === 200) {
        this.deletePictureRef._setData(res.data)
      }
    }))
  }


  componentWillUnmount() {
    this._clearTokens();
  }
  render() {
    return (
      <div className={'createAlbum-wrap garbageBasket-wrap'}>
        <header>
          <i onClick={this.goBack.bind(this)}></i>
          垃圾篓
        </header>
        <div className={'garbageBasket-content'}>
          <DeletePicture ref={ref => this.deletePictureRef = ref} />
        </div>
      </div>
    )
  }
}
export default GarbageBasket;