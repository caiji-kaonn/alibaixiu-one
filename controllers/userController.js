// 处理后台交互的请求和响应
const userModel=require('../models/userModel')

exports.login=(req,res)=>{
userModel.login();
}