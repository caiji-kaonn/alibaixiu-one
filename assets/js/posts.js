$(function(){
    $.ajax({
        type:'get',
        url:'/getAllposts',
        data:{
            pageNum:1,
            pageSize:3
        },
        success:function(res){
            let html=template('postListTemp',res);
            $('tbody').html(html);
        }
    })
})