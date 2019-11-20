import React from 'react';
import { Link } from 'react-router-dom';
import './createAlbum.scss';
import PicturesWall from '../../components/upload/upload';

class CreateAlbum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    return (
      <div className={'createAlbum-wrap'}>
        <header>
          <Link to={'/'}></Link>
          创建相册
        <Link to={'/'}><span>完成</span></Link>
        </header>
        <div className={'createAlbum-content'}>
          <div className={'album-description'}>
            <div style={{
              fontSize:'.48rem',
              color:'#414042'
            }}>xx相册介绍</div>
            <div className={'image-picker'}>
              <PicturesWall />
            </div>
          </div>
          <div className={'album-face'}>
            <p>相册封面</p>
            <div className={'up-load'}>
            </div>
          </div>
          <div className={'jurisdiction'}>
            <div>谁可以看</div>
            <span>
              <Link to={{
                pathname: '/jurisdiction'
              }}>
              </Link>
            </span>
          </div>
        </div>

      </div >
    )
  }
}
export default CreateAlbum;