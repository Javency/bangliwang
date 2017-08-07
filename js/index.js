/**
 * Created by DELL on 2017/4/25.
 */
window.onload = function() {
    /*我的邦礼账户*/
    var myCount = document.getElementById('myCount');
    var mylist = document.getElementById('mylist');
    myCount.onmouseover = function() {
        show('block');
    };
    myCount.onmouseout = function() {
        show('none');
    };
    mylist.onmouseover = function() {
        show('block');
    };
    mylist.onmouseout = function() {
        show('none');
    };

    /*关闭广告*/
    var oClose = document.getElementById('close');
    var ad = document.getElementById('ad');
    oClose.onclick = function() {
        ad.style.display = 'none';
    };

    /*公告栏*/
    var fwgg = document.getElementById('fwgg');
    var yhxx = document.getElementById('yhxx');
    var fwgg_list = document.getElementById('fwgg_list');
    var yhxx_list = document.getElementById('yhxx_list');

    yhxx.onmouseover = function() {
        yhxx_list.style.display = 'block';
        yhxx.style.background = '#fff';
        yhxx.style.borderBottom = 'none';
        fwgg.style.background = '#F7F6F6';
        fwgg.style.borderBottom = '1px solid #ccc';
        fwgg_list.style.display = 'none';
    };
    fwgg.onmouseover = function() {
        yhxx_list.style.display = 'none';
        fwgg_list.style.display = 'block';
        yhxx.style.background = '#F7F6F6';
        yhxx.style.borderBottom = '1px solid #ccc';
        fwgg.style.borderBottom = 'none';
        fwgg.style.background = '#fff';
    }
};

function show(eve) {
    mylist.style.display = eve;
}

/*
function changeStyle(id,bg,bb,dis){
    id=document.getElementById(id);
    bg=id.style.background;
    bb=id.style.borderBottm;
    dis=id.style.display;
}
*/
$(function() {
    // banner
    $("#banner").slider();

    //product
    $(".goods").find("img").hover(function() {
        $(this).css("position", "relative").animate({ "left": -10 }, 200);
    }, function() {
        $(this).stop().animate({ "left": 0 }, 200);
    });

    //sidebar
    $("#sidebar1").sidebar();
    $("#sidebar2").sidebar();
    $("#sidebar3").sidebar();
    $("#sidebar4").sidebar();
    $("#sidebar5").sidebar();

});