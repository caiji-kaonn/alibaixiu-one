$(function(){
    // 获取元素
    $('.getBtn').on('click',()=>{
    $.ajax({
        type:'post',
        url:'/admin/loginSet',
        dataType:'json',
        data:$('form').serialize(),
        success:function(res){
        //  如果是错
        if(res.code==400){
          $('.alert-danger >span').text(res.msg);
          $('.alert-danger').fadeIn(500).delay(2000).fadeOut(500)
        }else{
            location.href='/admin/index'
        }
        }
    })
    })
})