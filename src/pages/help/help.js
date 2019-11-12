import React from 'react';
import { Link } from 'react-router-dom';
class Help extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { text1: '上传照片慢和失败怎么办?', text2: '请检查网络设置，主要是因为您所处的网络问题.' },
        { text1: '上传照片慢和失败怎么办?', text2: '请检查网络设置，主要是因为您所处的网络问题.' },
        { text1: '上传照片慢和失败怎么办?', text2: '请检查网络设置，主要是因为您所处的网络问题.' },
        { text1: '上传照片慢和失败怎么办?', text2: '请检查网络设置，主要是因为您所处的网络问题.' }
      ]
    }
  }
  render() {
    return (
      <div className={'help-wrap'}>
        <header>
          <Link to='/'></Link>
          帮助
        </header>
        <div className={'help-content'}>
          {
            this.state.data.map((s, i) => {
              return <div key={'jx' + i}>
                <p> Q:{s.text1}</p>
                <p style={{
                  marginTop: -34,
                  color: '#231F20'
                }}> A:{s.text2}</p>
              </div>
            })
          }



        </div>
      </div>
    )
  }
}
export default Help;