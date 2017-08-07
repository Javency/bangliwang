/**
 * Created by DELL on 2017/4/27.
 */
window.onload = function() {
    var oClose = document.getElementById('close');
    var ad = document.getElementById('ad');
    oClose.onclick = function() {
        ad.style.display = 'none';
    }

    /*sidemenu*/
    var detail = document.getElementById('detail');
    var de_clo = document.getElementById('close_detail');
    var all = document.getElementById('all');
    detail.onclick = function() {
        all.style.display = 'block';
    }
    de_clo.onclick = function() {
        all.style.display = 'none';
    }

    var detail1 = document.getElementById('detail1');
    var de_clo1 = document.getElementById('close_detail1');
    var all1 = document.getElementById('all1');
    detail1.onclick = function() {
        all1.style.display = 'block';
    }
    de_clo1.onclick = function() {
        all1.style.display = 'none';
    }

    var detail2 = document.getElementById('detail2');
    var de_clo2 = document.getElementById('close_detail2');
    var all2 = document.getElementById('all2');
    detail2.onclick = function() {
        all2.style.display = 'block';
    }
    de_clo2.onclick = function() {
        all2.style.display = 'none';
    }

    var detail3 = document.getElementById('detail3');
    var de_clo3 = document.getElementById('close_detail3');
    var all3 = document.getElementById('all3');
    detail3.onclick = function() {
        all3.style.display = 'block';
    }
    de_clo3.onclick = function() {
        all3.style.display = 'none';
    }

};
// jq_sliderbar
$(function() {
    // var oUl = $("#slidebar").find("ul");
    // var aLi = $("#slidebar").find("ul").children("li");
    // // console.log(aLi.length);
    // var pre_pic = $(".pre_pic");
    // var next_pic = $(".next_pic");
    // // console.log(pre_pic);
    // // console.log(next_pic);
    // var timer = null;
    // var _index = 0;
    // start = function() {
    //     clearInterval(timer);
    //     timer = setInterval(function() {
    //         _index++;
    //         if (_index > aLi.length / 4) {
    //             _index = 0;
    //         }
    //         oUl.animate({
    //             "left": -aLi.width() * 4 * _index
    //         }, 500);

    //     }, 2000);
    // }
    // start();
    // pre_pic.on("click", function() {
    //     clearInterval(timer);
    //     _index--;
    //     if (_index < 0) {
    //         _index = aLi.length / 4;
    //     }
    //     oUl.animate({ "left": -aLi.width() * 4 * _index }, 500);
    // }).on("mouseout", start);
    // next_pic.on("click", function() {
    //     clearInterval(timer);
    //     _index++;
    //     if (_index > aLi.length / 4) {
    //         _index = 0;
    //     }
    //     oUl.animate({ "left": -aLi.width() * 4 * _index }, 500);
    // }).on("mouseout", start);
    $("#slidebar").productSlidebar();
});