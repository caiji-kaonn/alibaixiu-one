/** 
 * 这里只处理--文章渲染动态的请求和响应
*/

const postModel=require('../models/postModel');
const moment=require('moment');
exports.getAllposts=(req,res)=>{
    let obj=req.query;
postModel.getAllposts(obj,(err,data)=>{
if(err){
    res.json({code:400,msg:'数据查询失败'})
}else{
    for(let i=0;i<data.length;i++){
        data[i].created = moment(data[i].created).format('YYYY-MM-DD HH-mm-ss')
    }
    res.json({
        code:200,
        msg:'读取数据成功',
        data:data
    })
}
})
}


module.exports=getAllposts