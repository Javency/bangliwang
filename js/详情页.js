$(function() {
    $("#myCount").on("mouseover", function() {
        $("#mylist").css("display", "block");
    });
    $("#mylist").on("mouseleave", function() {
        $(this).css("display", "none");
    });


    var aDiv = $("#box1 div");
    var aA = $("#box1 a");
    var aB = $("#box1 b");
    // console.log(aDiv);
    // console.log(aA);
    // console.log(aB);

    aA.on("mouseover", function() {
        var _index = 0;
        _index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        aDiv.eq(_index - 3).css("display", "block").siblings().not(aA).css("display", "none");
        aB.parent().children("b").removeClass("selected").eq(_index - 3).addClass("selected");
    });


    var aA1 = $(".color a");
    var aB1 = aA1.children("b");
    aA1.on("mouseover", function() {
        aA1.not($(this)).css({ "border-width": "2px", "border-style": "solid", "border-color": "transparent" });
        $(this).css({ "border-width": "2px", "border-style": "solid", "border-color": "red" }).children("img").css({ "border": 0 });
    }).on("click", function() {
        aA1.not($(this)).css({ "border-width": "2px", "border-style": "solid", "border-color": "transparent" });
        $(this).css({ "border-width": "2px", "border-style": "solid", "border-color": "red" }).children("img").css({ "border": 0 });
    });

    var aA2 = $("#size").find("a");
    // console.log(aA2);
    aA2.on("click", function() {
        $(this).css({ "border-width": "1px", "border-style": "solid", "border-color": "red" }).siblings().css({ "border-color": "#B8B8B8" })
    });


    var number = $("#number");
    var minus = number.children("#minus");
    var add = number.children("#added");

    // console.log(numVal);
    minus.on("click", function() {
        var numVal = Number(number.children("#txt").val());
        numVal--;
        if (numVal < 0) {
            number.children("#txt").val(0);
            $(this).val("");
        } else {
            add.val("+");
            number.children("#txt").val(numVal);
        }
    });
    add.on("click", function() {
        var numVal = Number(number.children("#txt").val());
        numVal++;
        if (numVal > 99) {
            number.children("#txt").val(99);
            $(this).val("");
        } else {
            minus.val("-");
            number.children("#txt").val(numVal);
        }
    });

    var aList = $("#product_items").find("a");
    var aDivList = $("#product_detail").children("div");
    aList.on("click", function() {
        var _index = $(this).index();
        // console.log(_index);
        $(this).addClass("active2").siblings().removeClass("active2");
        aDivList.eq(_index).css("display", "block").siblings().not("ul").css("display", "none");
    });

    //评价
    var aOptions = $("#opinions").children("ul").find("a");
    var aDivs = $("#opinions").children("div");
    // console.log(aDivs);
    // console.log(aOptions);
    aOptions.on("click", function() {
        var _index = $(this).index();
        $(this).addClass("active3").siblings().removeClass("active3");
        aDivs.eq(_index).css("display", "block").siblings().not("ul").css("display", "none");
    });
});