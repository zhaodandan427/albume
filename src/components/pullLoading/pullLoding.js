import React from 'react';
import IscrollLuo from 'iscroll-luo';

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [1, 2, 3],
    };
  }
  onDown() {
    this.setState({
      data: [1, 2, 3],
    });
  }

  onUp() {
    this.setState({
      data: [...this.state.data, 1, 2, 3],
    });
  }

  render() {
    return (
      <div style={{
        position: 'relative', height: '100vh'
      }}>
        <IscrollLuo
          id='test'
          onPullDownRefresh={() => this.onDown()}
          onPullUpLoadMore={() => this.onUp()}
        >
          {this.state.data.map((v, i) => {
            return <div key={i}>{v}</div>
          })}
        </IscrollLuo>
      </div>
    );
  }
}