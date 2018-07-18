import axios from 'axios'

let fetch = axios.create({
  baseURL: process.env.BASE_URL + process.env.API_BASE_URL, // api的base_url
  withCredentials: true,
  timeout: 30000 // 请求超时时间
})

// fetch.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'  // 配置请求头

fetch.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})
// respone拦截器
fetch.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return false
  })

let openAjaxRequest = (url, data = {}, method, openLoad) => {
  let obj = {
    url: (process.env.NODE_ENV === 'production' ? window.staticUrl.API_HOST : process.env.API_HOST) + url,
    method,
    data,
    params: data
  }
  if (method === 'GET') {
    delete obj.data
  } else {
    delete obj.params
  }
  // console.log(obj)
  return fetch(obj)
}
// 登录
export function login (options) {
  return openAjaxRequest('api/v1/user/signin', options, 'POST')
}
