/**
 * 接口
 * @type {string}
 */
window.BASEURL_01 = undefined;
window.BASEURL_02 =undefined;
/**
 * 显示模式
 * full: 0x03, debug: 0x05
 *
 */

window.resizeMode = 0x03;
function getToken() {  
  let url =window.location.search; //获取url中"?"符后的字串  
  let tokenVal = {};  
  if (url.indexOf("?") !== -1) {  
    let str = url.substr(1);  
    let strs = str.split("&");  
    for(let i = 0; i < strs.length; i ++) {  
      tokenVal[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);  
    }  
  }  
   return tokenVal;
}
window.access_token=getToken().token;