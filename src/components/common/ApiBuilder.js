import axios from 'axios';

const WITH_REQUEST_BODY = 0x01;
const WITHOUT_REQUEST_BODY = 0x02;

const isLegalMethod = function (method) {
  const map = {
    'get': WITHOUT_REQUEST_BODY,
    'delete': WITHOUT_REQUEST_BODY,
    'head': WITHOUT_REQUEST_BODY,
    'options': WITHOUT_REQUEST_BODY,
    'post': WITH_REQUEST_BODY,
    'put': WITH_REQUEST_BODY,
    'patch': WITH_REQUEST_BODY
  };
  return map[method.toLowerCase()];
};

class ArrayCallee extends Array {
  call() {
  }

  apply() {
  }
}

/**
 * API对象。
 * @author Molay
 */



class Api {
  constructor(option, baseOption) {
    if (!option || !baseOption)
      throw new Error('API定义必须有合法的配置。');

    let me = this;
    me._option = option;
    me._baseOption = baseOption;

    let url = option.url;
    if (!url)
      throw new Error('请求地址不合法。');
    // if (!/^\w+:\/\//.test(url)) {
    //   let baseUrl = baseOption.baseUrl || '';
    //   url = baseUrl + '/' + option.url;
    // }
    me._url = url;

    let method = option.method || 'get';
    let accessToken = option.access_token;
    let methodFlag = isLegalMethod(method);
    if (!methodFlag)
      throw new Error('请求方法' + method + '不合法。');
    me._method = method;
    me._accessToken = accessToken;
    me._methodFlag = methodFlag;
    // let aspect = option.aspect;
  }
  
  _option = undefined;
  _baseOption = undefined;

  _url = undefined;
  _method = undefined;
  _methodFlag = undefined;

  send(data) {
    let xhr = undefined;
    let cancel = undefined;
    let cancelled = false;
    let listThen = new ArrayCallee();
    let listCatch = new ArrayCallee();
    let listProgress = new ArrayCallee();

    let token = {
      then: function (executor) {
        listThen.push(executor);
        return this;
      },
      catch: function (executor) {
        listCatch.push(executor);
        return this;
      },
      progress: function (executor) {
        listProgress.push(executor);
        return this;
      },
      cancel: function () {
        cancelled = true;
        if (xhr) xhr.abort();
        else if (cancel) cancel();
        return this;
      }
    };

    let me = this;
    let option = me._option;
    let baseOption = me._baseOption;
    let simulation = baseOption.simulation || option.simulation;
    if (!simulation) {
      let config = {
        baseURL: option.baseUrl || baseOption.baseUrl || '',
        url: me._url,
        method: me._method,
        access_token: window.access_token,
        responseType: option.responseType || baseOption.responseType || 'json',
        onDownloadProgress: function (event) {
          if (!xhr) xhr = event.target;
          if (cancelled) return xhr.abort();
          listProgress.forEach(method => {
            method.call(null, event, xhr);
          });
        },
        cancelToken: new axios.CancelToken(function (c) {
          cancel = c;
        })
      };

      /*axios设置token到请求头------START*/

      axios.interceptors.request.use(function (config) {
        // Do something before request is sent
        // window.localStorage.getItem("accessToken") 获取token的value
        let token = window.access_token;
        if (token) {
          //将token放到请求头发送给服务器,将tokenkey放在请求头中
          config.headers.access_token = token;
          //也可以这种写法
          // config.headers['accessToken'] = Token;
          return config;
        }
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });

      /*axios设置token到请求头-------END*/

      if (option.isFormData) {
        const keys = Object.keys(data);
        let _params = '';
        keys.forEach((t, i) => {
          if (i < 1)
            _params += [t, '=', data[t]].join('');
          else
            _params += '&' + [t, '=', data[t]].join('')
        });
        config.url = me._url + `?${_params}`
      }
      if (me._methodFlag === WITH_REQUEST_BODY)
        config.data = data;
      else
        config.params = data;

      axios(config)
        .then(response => {
          if (cancelled) return;
          listThen.forEach(method => {
            method.call(null, response.data, response);
          });
        })
        .catch(error => {
          if (cancelled) return;
          listCatch.forEach(method => {
            method.call(null, error);
          });
        });
    }
    else {
      let simulator = option.simulator;
      let simulatorType = typeof simulator;
      if (simulatorType === 'string') {
        axios({ url: simulator })
          .then(response => {
            if (cancelled) return;
            listThen.forEach(method => {
              method.call(null, response.data, response);
            });
          })
          .catch(error => {
            if (cancelled) return;
            listCatch.forEach(method => {
              method.call(null, error);
            });
          });
      }
      else if (simulatorType === 'function') {
        new Promise(function (resolve, reject) {
          let result = simulator(option, data);
          let response = {
            data: result,
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {},
            get request() {
              return xhr;
            }
          };
          resolve(response);
        }).then(function (response) {
          if (cancelled) return;
          listThen.forEach(method => {
            method.call(null, response.data, response);
          });
        });
      }
    }

    return token;
  }
}

/**
 * API构建器，用以创建具备一定统一规则的API对象。
 * @author Molay
 */

class ApiBuilder {
  constructor(baseOption) {
    let me = this;
    me._baseOption = baseOption;
    me._defaultGroup = { name: 'default', apis: [] };
    me._groups = {
      'default': me._defaultGroup
    };
  }

  _baseOption = undefined;
  _defaultGroup = undefined;
  _groups = undefined;

  build(option) {
    let api = new Api(option, this._baseOption);
    this._defaultGroup.apis.push(api);
    return api;
  }
  group(name) {
    let me = this;
    return {
      build(option) {
        let group = me._groups[name];
        if (!group)
          me._groups[name] = group = { name: name, apis: [] };
        let api = new Api(option, this._baseOption);
        group.apis.push(api);
        return api;
      }
    }
  }
}

export default ApiBuilder;