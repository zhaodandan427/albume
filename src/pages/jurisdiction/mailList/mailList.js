import React from 'react';
import { Link } from 'react-router-dom';
import AccordionExmple from '../../../components/list/list'

class MailList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    
  }
  changesVal(e,val) {
    console.log(val)
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
          <AccordionExmple changvalues={this.changesVal.bind(this)} prefixcls='am-accordion' />
        </div>
      </div>
    )
  }
}
export default MailList;