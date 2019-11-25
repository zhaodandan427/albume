import React from 'react';
import './upload.scss';
export default class Uploadfiels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.imgs = this.imgsRef;

  }
  onChange = (e) => {
    var fileData = this.files.files[0];//获取到一个FileList对象中的第一个文件( File 对象),是我们上传的文件
    var pettern = /^image/;

    var imgs = this.imgsRef;
    if (!pettern.test(fileData.type)) {
      alert("图片格式不正确");
      return;
    }
    var reader = new FileReader();

    reader.readAsDataURL(fileData);//异步读取文件内容，结果用data:url的字符串形式表示
    /*当读取操作成功完成时调用*/
    reader.onload = function (e) {
      console.log(e); //查看对象
      console.log(this.result);//要的数据 这里的this指向FileReader（）对象的实例reader
      console.log(imgs)
      imgs.setAttribute('src', this.result)

    }
  };
  _delete() {
    var imgs = this.imgsRef;
    imgs.src = ''
  }
  render() {
    return (
      <div className={"fileBox"}>
        <div className={"warp"}>
          <div className={"warp-content"}>点击上传</div>
          <input type="file" id="file" ref={ref => this.files = ref} onChange={this.onChange} />
          <img src="" id='imgs' ref={ref => this.imgsRef = ref} />
          <span id='delete' ref={ref => this.delete = ref} onClick={this._delete.bind(this)}>×</span>
        </div>
      </div>
    )
  }
}