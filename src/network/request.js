import axios from 'axios'
// 他返回值就是一个promise，所有可以直接返回
export function request(config) {
    // 1.创建axios的实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    instance.interceptors.response.use(res => {
        // console.log('响应成功拦截成功')
        // console.log(res)
        return res.data
    },err => {
        // console.log("响应失败拦截成功")
        console.log(err)
    })

    // 3.发送真正的网络请求
    return instance(config)
}