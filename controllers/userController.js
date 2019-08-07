// 处理后台交互的请求和响应---这里是用来实现所有与users表相关的业务处理
const userModel=require('../models/userModel')

exports.login=(req,res)=>{
    // 获取数据
    let obj=req.body;
    // 把邮箱带回来
userModel.login(obj.email,(err,data)=>{
//    开始对数据作判断
if(err){
  res.json({code:400,msg:'服务器异常'})
}
else{
// 对邮箱密码进行判断
if(data){
    // 设置密码正确的情况---设置状态保持
if(obj.password==data.password){
   req.session.isLogin='true';
   req.session.usecurent=data;
   res.end(JSON.stringify({code:200,msg:'登录成功'}))
}else{
    res.json({code:400,msg:'密码错误'})
}
}else{
    res.json({code:400,msg:'邮箱错误'})
}
}

});
}


