import React from 'react';
import { Link } from 'react-router-dom';
class GarbageBasket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className={'createAlbum-wrap '}>
        <header>
          <Link to={{
            pathname: '/'
          }}></Link>
          垃圾篓
        </header>
        <div>

        </div>
      </div>

    )
  }
}
export default GarbageBasket;