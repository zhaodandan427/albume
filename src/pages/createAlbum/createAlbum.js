import React from 'react';
import { Link } from 'react-router-dom';
import './createAlbum.scss';
import Uploader from '../../components/uploadFiles/uploadFiles';
import { ImagePicker } from 'antd-mobile';
const data = [{
  url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
  id: '2121',
}, {
  url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
  id: '2122',
}];
class CreateAlbum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: data,
      multiple: false,
    }
  }
  onChange = (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      files,
    });
  }
  onSegChange = (e) => {
    const index = e.nativeEvent.selectedSegmentIndex;
    this.setState({
      multiple: index === 1,
    });
  }
  render() {
    const { files } = this.state;
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
              fontSize: '.48rem',
              color: '#414042'
            }}>xx相册介绍</div>
            <div className={'image-picker'}>
              <ImagePicker
                files={files}
                onChange={this.onChange}
                onImageClick={(index, fs) => console.log(index, fs)}
                selectable={files.length < 9}
                multiple={this.state.multiple}
                length={3}
              />
            </div>
          </div>
          <div className={'album-face'}>
            <p>相册封面</p>
            <div className={'up-load'}>
              <Uploader />
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