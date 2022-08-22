// 1.引入express
const express = require('express');
const {requset} = require('express')

// 2.创建应用对象
const app = express();

// 3.创建路由规则
// requset 对请求报文的封装
// response 对响应报文的封装
app.get('/server',(requset,response)=>{
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    // 设置响应体
    response.send('HELLO AJAX - 2')
});

// all可以接受任意类型的请求
app.all('/server',(requset,response)=>{
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    // 响应头
    response.setHeader('Access-Control-Allow-Headers','*')
    // 设置响应体
    response.send('HELLO AJAX POST')
});

// JSON响应
app.all('/json-server',(requset,response)=>{
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    // 响应头
    response.setHeader('Access-Control-Allow-Headers','*')
    // 响应一个数据
    const data = {
        name:'atguigu'
    };
    // 对对象进行字符串转换
    let str = JSON.stringify(data);
    // 设置响应体
    response.send(str)
});

// 针对IE缓存
app.get('/ie',(requset,response)=>{
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    // 设置响应体
    response.send('HELLO IE')
});

// 延时响应
app.all('/delay',(requset,response)=>{
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    setTimeout(() => {
        // 设置响应体
        response.send('延时响应')
    },3000)
});

// jQuery 服务
app.all('/jquery-server',(requset,response)=>{
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    // response.send('Hello jQuery AJAX')
    const data = {name:'尚硅谷'}
    response.send(JSON.stringify(data))
});

// axios 服务
app.all('/axios-server',(requset,response)=>{
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    // response.send('Hello jQuery AJAX')
    const data = {name:'尚硅谷'}
    response.send(JSON.stringify(data))
});

// fetch 服务
app.all('/fetch-server',(requset,response)=>{
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*')
    response.setHeader('Access-Control-Allow-Headers','*')
    // response.send('Hello jQuery AJAX')
    const data = {name:'尚硅谷'}
    response.send(JSON.stringify(data))
});

// jsonp 服务
app.all('/jsonp-server',(requset,response)=>{
    // response.send('console.log(hello jsonp-server)')
    const data = {
        name:'尚硅谷',
    }
    // 将数据转化为字符串
    let str = JSON.stringify(data)
    // 返回结果
    response.end(`handle(${str})`)
    
});

// 用户名检测是否存在
app.all('/check-username',(requset,response)=>{
    // response.send('console.log(hello jsonp-server)')
    const data = {
        exist:1,
        msg:'用户名已经存在'
    }
    // 将数据转化为字符串
    let str = JSON.stringify(data)
    // 返回结果
    response.end(`handle(${str})`)
    
});

// jquery-jsonp 服务
app.all('/jquery-jsonp-server',(requset,response)=>{
    // response.send('console.log(hello jsonp-server)')
    const data = {
        name:'尚硅谷',
        city:['北京','上海','深圳']
    }
    // 将数据转化为字符串
    let str = JSON.stringify(data)
    // 接收callback参数
    let cb = requset.query.callback
    // 返回结果
    response.end(`${cb}(${str})`)
    
});

// cors 服务
app.all('/cors-server',(requset,response)=>{
    // 设置响应头
   response.setHeader('Access-Control-Allow-Origin','*')
   response.setHeader('Access-Control-Allow-Headers','*')
   response.setHeader('Access-Control-Allow-Method','*')
   response.send('HELLO CORS')
});

// 4.监听端口启动服务
app.listen(8000,()=>{
    console.log('服务已经启动，8000端口监听中。。。');
})
