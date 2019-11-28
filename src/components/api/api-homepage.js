import builder from './api-common';
//首页的图片列表
export const pictureList = builder.build({
  baseUrl: builder.BASEURL_01,
  url: '/list',
  method: 'GET',
  simulation: true,
  simulator: '/static/api-simulation/homepage/picture.json',
});
//首页的图片列表
export const imgSrc = builder.build({
  baseUrl: builder.BASEURL_01,
  url: '/',
  method: 'GET',
  simulation: true,
  simulator: '/static/api-simulation/homepage/selct.json',
});
