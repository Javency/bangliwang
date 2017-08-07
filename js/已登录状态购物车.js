/**
 * Created by DELL on 2017/5/6.
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
}

function show(eve) {
    mylist.style.display = eve;
}

//轮播
$(function() {

    function silder() {
        var bar = $("#bar");
        // console.log(bar);
        var aLi = bar.children("li");
        // console.log(aLi);
        var timer = null;
        var _index = 0;
        var prev = $("#prev");
        var next = $("#next");

        start = function() {
            clearInterval(timer);
            timer = setInterval(function() {
                _index++;
                if (_index >= aLi.length / 5) {
                    _index = 0;
                }
                bar.animate({ "left": -1060 * _index }, 300);
            }, 2000);
        }

        start();

        prev.on("click", function() {
            _index--;
            if (_index < 0) {
                _index = (aLi.length / 5) - 1;
            }
            clearInterval(timer);
            bar.animate({ "left": -1060 * _index }, 300);
        }).on("mouseout", function() {
            start();
        });

        next.on("click", function() {
            clearInterval(timer);
            _index++;
            if (_index >= aLi.length / 5) {
                _index = 0;
            }
            bar.animate({ "left": -1060 * _index }, 300);
        }).on("mouseout", function() {
            start();
        });
    }
    silder();

    //全选
    function checkAll() {

        var aInput = $("table").find("input[type='checkbox']");
        var selectAll = $(".selectAll").find("input");
        var aTr = $("tbody").children("tr");
        var jiesuan = $("#jiesuan");
        // console.log(aTr);
        // console.log(selectAll);
        // console.log(aInput);
        aInput.eq(0).on("click", function() {
            if ($(this).is(":checked")) {
                aInput.not(aInput.eq(0)).prop("checked", "true");
                aTr.not(aTr.eq(2)).css("background", "#FEC6C5");
                jiesuan.removeClass("jieH").addClass("jieS");
            } else {
                aInput.not(aInput.eq(0)).prop("checked", "false");
                aTr.not(aTr.eq(2)).css("background", "#FFF");
                jiesuan.removeClass("jieS").addClass("jieH");
            }
        });

        selectAll.on("click", function() {
            var jiesuan = $("#jiesuan");
            if ($(this).is(":checked")) {
                aInput.prop("checked", "true");
                aTr.not(aTr.eq(2)).css("background", "#FEC6C5");
                jiesuan.removeClass("jieH").addClass("jieS");
            } else {
                aInput.prop("checked", "false");
                aTr.not(aTr.eq(2)).css("background", "#FFF");
                jiesuan.removeClass("jieS").addClass("jieH");
            }
        });

        aInput.not(aInput.eq(0)).each(function(i, e) {
            var jiesuan = $("#jiesuan");
            // console.log(jiesuan);
            // $(this).on("click", function() {
            //  $(this).parent().parent().css("background", "#FEC6C5");
            // });
            $(this).on("click", function() {
                if ($(this).is(":checked")) {
                    $(this).parent().parent().css("background", "#FEC6C5");
                    jiesuan.removeClass("jieH").addClass("jieS").css("cursor", "pointer");
                } else {
                    $(this).parent().parent().css("background", "#FFF");
                    jiesuan.removeClass("jieS").addClass("jieH").css("cursor", "not-allowed");
                }
            });
        });
    }
    checkAll();

    //返回顶部
    // $(".backtop").on("click", function() {
    //     $("body,html").animate({ "scrollTop": 0 }, 300);
    // });
    $('.backtop').hide();
    $('.backtop').click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 120);
    });
    $(window).on('scroll', function() {
        var st = $(document).scrollTop();
        (st > 0) ? $(".backtop").fadeTo(300, 1): $('.backtop').fadeOut(300);
    });


    //结算

    // console.log(total);
    // console.log($("table .jifen").html().slice(0, 3));

    $("input[type='number']").each(function(i, e) {
        $(this).change(function() {
            var unitPrice = Number($(".price2").eq(i).html());
            // console.log(unitPrice);
            var numbers = Number($("input[type='number']").eq(i).val());
            // console.log(numbers);
            var total = Number($("table .jifen").eq(i).html().slice(0, 3));
            total = unitPrice * numbers;
            $("table .jifen").eq(i).html(total + ".00积分");
        });
    });
});

$(function() {
    var del = $(".del");
    del.each(function(i, e) {
        var collect = $(this).children("a").eq(0);
        var _delete = $(this).children('a').eq(1);

        collect.on("click", function() {
            $(this).parent().parent().css("display", "none");
        });

        _delete.on("click", function() {
            $(this).parent().parent().css("display", "none");
        });
    });

});

$(function() {
    var summary = $(".summary");
    // var numbers = Number(summary.children("p").eq(0).children("span").html());
    var goodsList = $(".goodsList");
    var totalJifen = 0;
    goodsList.each(function(i, e) {
        var check = $(this).children("td").children("input");
        _this = $(this);

        var jifen = Number(_this.children(".jifen").html().slice(0, 3));
        if ($(this).is(":checked")) {
            totalJifen += jifen;
            summary.children("p").eq(1).children("span").html(totalJifen + ".00");
        } else {
            summary.children("p").eq(1).children("span").html("0.00");
        }

    });
});