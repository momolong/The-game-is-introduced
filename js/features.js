/**
 * Created by Administrator on 2016/6/30 0030.
 */
/*全局选项卡*/
$(function(){
    $(".tab-bar li").click(function(){
        $(this).addClass("on")//当前li高亮
            .siblings().removeClass("on"); //其他同辈li取消高亮
        //获取当前元素的索引
        var index = $(this).index();
        //利用索引将li和div联系起来
        $(".tab-box").children("div").eq(index).show()  //对应的内容显示
            .siblings().hide(); //其他同辈div隐藏
    })
/*第一页.js*/
    $(".page-1 .man").animate({left:750},2000);
    $(".page-1 .hehua").animate({top:360},1000);
    $(".page-1 .hua").fadeIn(1500);

/*第二页.js*/
    /*跑马灯*/
    var i=1;
        $(".page-2 .right-box li").eq(0).animate({marginTop:-165},1500)
    function del(){
        var $img=$(".page-2 .right-box").html()+"<li>"+ $(".page-2 .right-box li").eq(0).html()+"</li>";
        $(".page-2 .right-box").html($img);
        $(".page-2 .right-box li").eq(0).remove();
        $(".page-2 .right-box li").eq(0).animate({marginTop:-165},1500)
    }
    delvar=setInterval(del,2500)
    $('.right-box ').hover(function(){
        clearInterval(delvar);
    },function(){
        delvar=setInterval(del,2500)
    })


/*第三页.js*/
    $(".page-3 a").click(function () {
        var i=$(".page-3 .right img:visible").index();
        i++;
        if(i==5){
            i=0;
        }
        $(".page-3 .right img").hide().eq(i).fadeIn(1000);
    })
  /*轮播图*/
    //定义全局变量
    var len = $('.banner-ul li').length;    //焦点图个数
    var count = 0;               //计数器
    //将banner图片隐藏，除了第一张
    $('.banner-ul li:gt(0)').hide();

    //功能1：点击焦点显示相应banner图
    $('.banner-span span').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        var index = $(this).index();
        $('.banner-ul li').eq(index).fadeIn('slow').siblings().fadeOut('fast');
        count= $(this).index();
    })
    //功能2：图片轮播
    //自定义函数
    function banner(){
        //循环播放
        count++;
        if(count == len){
            //重置
            count = 0;
        }
        $('.banner-ul li').eq(count).fadeIn('slow').siblings().fadeOut('slow');
        //焦点跟随高亮
        $('.banner-span span').eq(count).addClass('on').siblings().removeClass('on');
    }
    //自动播放的函数
    function move(){
        //变量的作用域 --- 变成全局变量
        timer = setInterval(banner,1500);

    }
    //开始播放
    move();
    //功能3：鼠标移入banner停止播放，移除继续播放
    $('.banner').hover(function(){
        clearInterval(timer);
    },function(){
        move();
    })
    //鼠标移入时上一张下一张按钮渐现
    $(".onOne").hover(function(){
            $(this).addClass("hidon");
        }, function () {
            $(this).removeClass("hidon");
        }
    )
    $(".underOne").hover(function(){
            $(this).addClass("hidunder");
        }, function () {
            $(this).removeClass("hidunder");
        }
    )

    //上一张
    $(".onOne").click(function(){
        count--;
        $('.banner-span span').eq(count).click()
    })
    //下一张
    $(".underOne").click(function(){

        if(count==len-1){
            count=0;
        }else{
            count++;
        }

        $('.banner-span span').eq(count).click()
    })

/*第四页.js*/
    $(".ren-box").children("img").eq(0).show()  //对应的内容显示
        .siblings().hide();
    $(".menpai li").click(function(){
            $(this).addClass("on")//当前li高亮
                .siblings().removeClass("on"); //其他同辈li取消高亮
            //获取当前元素的索引
            var index = $(this).index();
            //利用索引将li和div联系起来
            $(".menpai-box").children("div").eq(index).show()  //对应的内容显示
                .siblings().hide(); //其他同辈div隐藏
            $(".ren-box").children("img").eq(index).fadeIn(2500)  //对应的内容显示
                .siblings().hide(); //其他同辈div隐藏
            var bjImg=$(this).index();
            $(".page-4").css('background','url("img/p'+bjImg+'_bg.jpg")');
        })
/*第五页.js*/
    $(".play-1").hover(function () {
        $(this).find("p").eq("0").animate({left:-75,top:-75},1000)
        $(this).find("p").eq("1").animate({left:-75,top:75},1000)
    },function () {
        $(this).find("p").eq("0").animate({left:0,top:0},150)
        $(this).find("p").eq("1").animate({left:0,top:0},150    )
    })
    $(".play-2").hover(function () {
        $(this).find("p").eq("0").animate({left:-75,top:-75},1500)
        $(this).find("p").eq("1").animate({left:-75,top:75},1500)
        $(this).find("p").eq("2").animate({left:75,top:75},1500)
    },function () {
        $(this).find("p").eq("0").animate({left:0,top:0},150)
        $(this).find("p").eq("1").animate({left:0,top:0},150)
        $(this).find("p").eq("2").animate({left:0,top:0},150)
    })
    $(".play-3").hover(function () {
        $(this).find("p").eq("0").animate({left:-75,top:-75},1500)
        $(this).find("p").eq("1").animate({left:75,top:75},1500)
        $(this).find("p").eq("2").animate({left:75,top:-75},1500)
        $(this).find("p").eq("3").animate({left:150},1500)
    },function () {
        $(this).find("p").eq("0").animate({left:0,top:0},150)
        $(this).find("p").eq("1").animate({left:0,top:0},150)
        $(this).find("p").eq("2").animate({left:0,top:0},150)
        $(this).find("p").eq("3").animate({left:0},150)
    })

/*第六页.js*/
    $(".page-6 li").click(function(){
        $(this).find("i").animate({height:30,top:85},2000)
        $(this).siblings().find("i").animate({height:100,top:15},2000)
        //获取当前元素的索引
        var index = $(this).index();
        //利用索引将li和div联系起来
        $(".button-box").children("div").eq(index).show(1000)  //对应的内容显示
            .siblings().hide(); //其他同辈div隐藏
        var bjImg=$(this).find("img").attr("src")
            $(".page-6").css('background','url("'+bjImg+'")');


    })
})