// 封装成函数 
export function request(options){
 return new Promise((resolve,reject)=>{
  wx:wx.request({
    ...options,
    success:(res)=>{
      resolve(res.data)
    },
    fail:(err)=>{reject(err)}
  })
 })
}
// 封装成类 ->实例
class Request{
  constructor(baseUrl){
    this.baseUrl=baseUrl
  }
  requset(options){
    const {url}=options
    return new Promise((resolve,reject)=>{
      wx.request({
        ...options,
        url:this.baseUrl+url,
        success:(res)=>{
          resolve(res.data)
        },
        fail:(err)=>{
          reject(err)
        }
      })
    })
  }
  get(options){
    return this.requset({...options,method:"get"})
  }
  post(options){
    return this.requset({...options,method:"post"})
  }
}
export const requestInstance = new Request("http://codercba.com:1888/api")