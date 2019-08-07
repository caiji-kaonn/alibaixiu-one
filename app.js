const express=require('express');
const router=require('./router');
const session=require('express-session');
const bodyParser=require('body-parser');
const app=express();

app.listen(8080,()=>{
    console.log('服务器已启用,可通过 http://172.20.10.2:8080 访问');
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
app.use(session({
secret:'my_albx_35',
resave:false,
saveUninitialized:false
}))
// 给session添加全局中间件，给打开后台时都要经过这个中间件
app.use(function(req,res,next){
    // 设置三种不用登录的情况
    /** 
     * 1.登录页面
     * 2.前台三个页面
     * 3.有登录状态
    */
   if(req.session.isLogin && req.session.isLogin =='true' ||req.url=='/admin/login' || req.url.indexOf('/admin')==-1){
    next()
   }else{
    res.redirect('/admin/login')
   }
  
})

app.use(router);

