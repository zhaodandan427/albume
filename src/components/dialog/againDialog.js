import React from 'react';
import './dialog.scss';
class Dialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true
        };
        this.dialogRef = React.createRef();

    }
    _setData(d) {
        this.setState({
            data: d.data,
            id: d.id,
        })
    }

    _open() {
        this.setState({
            display: false,

        })
    }
    _close() {
        this.setState({
            display: true
        })
    }
    //点击取消
    cancel() {
        const me = this;
        me._close()
    }
    //兑换
    confirm(id) {
        const me = this;
        me.props.onSure(id);
        me._close()

    }
    render() {
        const me = this;
        const datas = [];
        if (me.state.data) {
            datas.push(me.state.data);
        }
        return (
            <div className={'dialog-container'} ref={this.dialogRef} style={{
                display: this.state.display === true ? 'none' : 'block'
            }}>
                <div className={'dialog-marker-repeat'}>
                    <h3 >确认删除</h3>
                    <p>
                        <span>确定要删除吗？</span>
                    </p>
                    <ul >
                        <li onClick={this.confirm.bind(this, me.state.id, me.state.flag)}>确认</li>
                        <li onClick={this.cancel.bind(this)}>取消</li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Dialog;