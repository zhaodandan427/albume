import React from 'react';
import Luo from 'iscroll-luo';
import bg1 from './1.jpg';
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: '本周',
          lists: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        },
        {
          name: '本月',
          lists: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        },
      ]
    };
  }

  /** 下拉刷新 **/
  onDown() {
    this.setState({
      data: [
        {
          name: '本周',
          lists: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        },
        {
          name: '本月',
          lists: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        },
      ]
    });
    /** 注意此处，就算没有数据或接口调用失败等情况，也要刷一下原始数据，Luo内部才知道状态更新了 **/
  }

  /** 上拉加载更多 **/
  onUp() {
    this.setState({
      data: [...this.state.data, {
        name: '本周',
        lists: [1, 2, 3, 4, 5, 6, 7, 8, 9]
      },
      {
        name: '本月',
        lists: [1, 2, 3, 4, 5, 6, 7, 8, 9]
      },]
    });
    /** 注意此处，就算没有更多数据了或接口调用失败等情况，也要刷一下原始数据，Luo内部才知道状态更新了 **/
  }

  render() {
    return (

      <div style={{ position: 'relative', height: '100vh' }}>
        <Luo
          id='id'
          onDown={() => this.onDown()}
          onUp={() => this.onUp()}
        >
          {
            this.state.data.map((s, i) => {
              return <div key={'js' + i}>
                <h3>{s.name}</h3>
                <ul>
                  {
                    s.lists.map((item, j) => {
                      return <li key={'js' + j}><img src={bg1} alt='' /></li>
                    })
                  }
                </ul>
              </div>
            })
          }
        </Luo>
      </div>
    );
  }
}
export default Test