/** 
 * 这里处理的是文章渲染动态的数据
*/

const conn=require('../utils/mysql');
exports.getAllposts=(obj,callback)=>{
    let sql=`SELECT posts.*,users.nickname,categories.name
    FROM posts
    JOIN users ON posts.user_id=users.id
    JOIN categories ON posts.category_id=categories.id
    order by id desc
    limit ${(obj.pageNum-1)*obj.pageSize},${obj.pageSize}`
conn.query(sql,(err,result)=>{
if(err) {
    callback(err);
}else{
callback(null,result);
}
})
}

module.exports=getAllposts;
