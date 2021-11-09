import axios from 'axios';

export function request(config){

    const instance = axios.create({
        baseURL:'https://api.shop.eduwork.cn',
        timeout:5000
    });

    //请求拦截
    instance.interceptors.request.use(config=>{
        // 如果API需要认证， 在这统一设置

        return config;
    }, err=>{

    })

    //响应拦截
    instance.interceptors.response.use(res=>{

        return res.data ? res.data : res;
    }, err=>{
        // 如果没有授权， 去login

        // 如果有错误， 在这里可以提示
    })

    return instance(config)
}