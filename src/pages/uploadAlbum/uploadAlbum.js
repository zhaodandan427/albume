import React from 'react';
import { Link } from 'react-router-dom';
import Upload from '../../components/upload/loading'
class UploadAlbum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    let id = this.props.match.params.id;
    return (
      <div className={'createAlbum-wrap'}>
        <header>
          <Link to={{
            pathname: `/photoBrowsing/${id}`
          }}></Link>
          上传相册
        <Link to={{
            pathname: `/photoBrowsing/${id}`
          }}><span>完成</span></Link>
        </header>
        <div className={'createAlbum-content'}>
          <Upload />
        </div>

      </div>
    )
  }
}
export default UploadAlbum;