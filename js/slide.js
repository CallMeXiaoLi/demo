  $(function (){
        var mySwipe = new Swipe($('.banner')[0],{
           
            auto:2000,
            continuous:true,
            stopPropation:true,
            callback:function (index,element){
                $('.banner ol li').removeClass('active');
                $('.banner ol li').eq(index).addClass('active');
            }
        });
        console.log(mySwipe);
    });    