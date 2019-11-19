import React from 'react';
class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div class="warp">
          <div class="warp-content">+</div>
          <input type="file" id="file" />
        </div>
      </div>
    )
  }
}
export default Loading;
