import axios, { AxiosRequestConfig } from 'axios'

const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL
})

// Add a request interceptor
request.interceptors.request.use(function (config) {
  // 统一设置用户token
  return config
}, function (error) {
  return Promise.reject(error)
})

// Add a response interceptor
request.interceptors.response.use(function (response) {
  // 统一处理接口响应错误 比如token过期无效 服务端异常
  return response
}, function (error) {
  return Promise.reject(error)
})
// 为了支持范型
export default <T = any> (config: AxiosRequestConfig) => {
  return request(config).then(res => {
    return res.data.data as T
  })
}
