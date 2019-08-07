// 处理用户交互数据 --增删改查
const conn=require('../utils/mysql')

exports.login=(email,callback)=>{
let sql=`SELECT * FROM users WHERE email = "${email}"`
   conn.query(sql,(err,result)=>{
       if(err) {
            callback(err);  
       }else{
        // 查询返回一个数组，且数据只有一个
        callback(null,result[0]);
       }
       
   })
}