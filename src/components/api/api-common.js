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
builder.BASEURL_01 = window.BASEURL_01 || '';
export default builder;


