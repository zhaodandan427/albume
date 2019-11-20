import React from 'react';
import { Link } from 'react-router-dom';
import AccordionExmple from '../../../components/list/list'
class Meeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  changesVal() {

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
          <AccordionExmple changValues={this.changesVal.bind(this)} />
        </div>
      </div>
    )
  }
}
export default Meeting;