import ApiBuilder from '../common/ApiBuilder';

/**

 * @type {ApiBuilder}
 */

const builder = new ApiBuilder({
  baseUrl: 'http://localhost:3000/apis',

});

/**
 * http://0.0.0.0:8080/
 * @type {string}
 */
builder.BASEURL_01 = window.BASEURL_01 || 'http://172.20.95.124:9944/album/api/mobile/album';
export default builder;


