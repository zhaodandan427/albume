import React from 'react';
import { Link } from 'react-router-dom';
import './createAlbum.scss';
import { ImagePicker, WingBlank, SegmentedControl } from 'antd-mobile';
class CreateAlbum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [
        // {
        //   url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
        //   id: '2121',
        // }, {
        //   url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
        //   id: '2122',
        // }
      ],
      multiple: false,

    }

  }
  onChange = (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      files,
    });
  }
  
  render() {
    const files=this.state.files;
    return (
      <div className={'createAlbum-wrap'}>
        <header>
          <Link to={'/'}></Link>
          创建相册
        <Link to={'/'}><span>完成</span></Link>
        </header>
        <div className={'createAlbum-content'}>
          <div className={'album-description'}>请输入相册介绍</div>
          <WingBlank>
            
            <ImagePicker
              files={files}
              onChange={this.onChange}
              onImageClick={(index, fs) => console.log(index, fs)}
              selectable={files.length < 10}
              multiple={this.state.multiple}
            />
          </WingBlank>
        </div>
      </div>
    )
  }
}
export default CreateAlbum;