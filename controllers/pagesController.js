// 这里处理的是静态页面的请求和返回--包括前台和后台的静态页面
// 前台页面-首页
exports.getIndex=(req,res)=>{
res.render('index');
}
// 前台页面--细节
exports.getDetail=(req,res)=>{
    res.render('detail')
}
// 前台页面--列表
exports.getList=(req,res)=>{
    res.render('list')
}

// 后台页面--约定加了个 /admin 
exports.getAdmincategories=(req,res)=>{
    res.render('admin/categories')
}
exports.getAdmincomments=(req,res)=>{
    res.render('admin/comments');
}
exports.getAdminindex=(req,res)=>{
    res.render('admin/index')
}
exports.getAdminlogin=(req,res)=>{
    res.render('admin/login')
}
exports.getAdminnavmenus=(req,res)=>{
    res.render('admin/nav-menus')
}
exports.getAdminpasswordreset=(req,res)=>{
    res.render('admin/password-reset')
}
exports.getAdminpostadd=(req,res)=>{
    res.render('admin/post-add')
}
exports.getAdminposts=(req,res)=>{
    res.render('admin/posts')
}
exports.getAdminprofile=(req,res)=>{
    res.render('admin/profile')
}
exports.getAdminsettings=(req,res)=>{
    res.render('admin/settings')
}
exports.getAdminslides=(req,res)=>{
    res.render('admin/slides');
}
exports.getAdminusers=(req,res)=>{
    res.render('admin/users');
}
