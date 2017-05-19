/*
* 请求中间件
*/

export const SET_HEADER_U = (request, next) => {
  // 处理请求体
  // request.method = 'POST'
  request.headers.set('Authorization', 'vincent')
  console.log('middleware:SET_HEADER_U')
  next((response) => {
    // 处理返回的数据
    console.log(response)
  })
}
