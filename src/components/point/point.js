import React from 'react'
import './point.scss';
import { Icon } from 'antd';
class LikeBtn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      like: 110,
      liked: 'null',
      data: ['张委员', '李委员'],
      val: [],
    };
  }
  islike = () => {
    let liked = this.state.liked;

    if (liked) {
      if (liked === 'like') {
        this.setState({ liked: null })
        this.setState({ like: this.state.like - 1 });
      }
      else {
        this.setState({ liked: 'like' });
        this.setState({ like: this.state.like + 1, });
      }
    }
    else {
      this.setState({
        like: this.state.like + 1,
      });
      this.setState({ liked: 'like' });
    }
  };
 
  
  render() {
    return (
      <div>
        <Icon onClick={this.islike} type='heart' theme={this.state.liked === 'like' ? 'filled' : ''} /> 点赞({this.state.like})
      </div>
    );
  }
}
export default LikeBtn;
