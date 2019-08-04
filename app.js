const express=require('express');
const router=require('./router');
const bodyParser=require('body-parser');
const app=express();

app.listen(8080,()=>{
    console.log('服务器已启用,可通过 http://192.168.70.111:8080 访问');
})

// 托管静态资源
app.use('/assets',express.static('assets'));
app.use('/uploads',express.static('uploads'))

// 设置ejs模板引擎
app.set('view engine','ejs');
// 设置 文件从根目录（路由器所在的文件）开始---到views 的 里面找
app.set('views',__dirname+'/views')

// 设置中间件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

