import React from 'react';
export default class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.radioName =
      [
        { name: "公开", "con": "所有委员可见" },
        { name: "部分公开", "con": "选中的委员可见" }
      ];

  }
  getValue(event) {
    this.props.getValueInput(event)
    this.setState({ value: event.target.value });

  }
  render() {
    return (
      <div className={'radio-wrap'}>
        {
          this.radioName.map((s, i) => {
            return <div key={'kx' + i}>
              <input type="radio" name='gender' value={`${s.name}`}
                onChange={(e) => this.getValue(e)} />
              <p>
                <span>{s.name}</span><br />
                <span>{s.con}</span>
              </p>
            </div>
          })
        }
      </div>
    )
  }
}