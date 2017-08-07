$(function() {
    var box = $("#banner");
    var aLi = box.find("li");
    var aItem = $("#banner_item").children("a");
    var timer = null;
    var _index = 0;

    aItem.hover(function() {
        clearInterval(timer);
        _index = $(this).index();
        $(this).addClass("tored").siblings().removeClass("tored");
        aLi.eq(_index).animate({ "opacity": 1 }, 300).siblings().animate({ "opacity": 0 }, 30);
    }, function() {
        start();
    });

    start = function() {
        timer = setInterval(function() {
            _index++;
            if (_index > aLi.length) {
                _index = 0;
            }
            aItem.eq(_index).addClass("tored").siblings().removeClass("tored");
            aLi.eq(_index).animate({ "opacity": 1 }, 300).siblings().animate({ "opacity": 0 }, 30);
        }, 2000);
    }
    start();


    var more = $("#more");
    var pinpai = $(".pinpai").find("a");
    var hide = $(".pinpai").find("a:gt(26)").not("#more");
    // console.log(hide);
    hide.css("display", 'none');
    more.on("click",
        function() {
            if (more.html() === "更多") {
                hide.css("display", "inline-block");
                $(this).html("隐藏部分").removeClass("more").addClass("hide");
            } else {
                $(this).html("更多").removeClass("hide").addClass("more");
                hide.css("display", "none");
            }
        });
});