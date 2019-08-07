// 这里处理的是判断请求文件

const express=require('express');
const router=express.Router();
const pagesController=require('./controllers/pagesController');
const userController=require('./controllers/userController');
const postController=require('./controllers/postController');

// 前台页面
router.get('/index',pagesController.getIndex)
      .get('/detail',pagesController.getDetail)
      .get('/list',pagesController.getList)
      
      
// 后台页面---约定加个 /admin 区分
      .get('/admin/categories',pagesController.getAdmincategories)
      .get('/admin/comments',pagesController.getAdmincomments)
      .get('/admin/index',pagesController.getAdminindex)
      .get('/admin/login',pagesController.getAdminlogin)
      .get('/admin/navmenus',pagesController.getAdminnavmenus)
      .get('/admin/passwordreset',pagesController.getAdminpasswordreset)
      .get('/admin/postadd',pagesController.getAdminpostadd)
      .get('/admin/posts',pagesController.getAdminposts)
      .get('/admin/profile',pagesController.getAdminprofile)
      .get('/admin/settings',pagesController.getAdminsettings)
      .get('/admin/slides',pagesController.getAdminslides)
      .get('/admin/users',pagesController.getAdminusers)

// 后台---登录--设置
router.post('/admin/loginSet',userController.login)

// 后台--发送文章渲染动态
router.get('/getAllposts',postController.getAllposts)


module.exports=router;