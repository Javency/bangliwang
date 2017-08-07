(function($) {
    $.fn.extend({
        sidebar: function(options) {
            var _this = this,
                next = null,
                prev = null,
                init = null,
                _index = 0,
                elems = {},
                defaluts = {
                    event: "click"
                }

            options = $.extend(defaluts, options);

            init = function() {
                elems.aLi = _this.find("li");
                elems.aBtn = _this.find("span");
                elems.oUl = _this.find("ul");
                elems.oUl.top = _this.find(".cover ul").offset().top;
                elems.aLi.height = elems.aLi.height();
                // console.log(elems.aLi.height);
                _index = elems.aLi.index();

                prev = function() {
                    elems.aBtn.eq(0).on(options.event, function() {
                        _index--;
                        if (_index <= (-elems.aLi.length / 2)) {
                            _index = 0;
                        }
                        console.log(_index);
                        elems.oUl.animate({ "top": elems.aLi.height * (_index) }, 200);
                    });
                }
                prev();

                next = function() {
                    elems.aBtn.eq(1).on(options.event, function() {
                        _index++;
                        // if (elems.oUl.top >= 0) {
                        //     _index = (elems.aLi.length / 2) - 1;
                        //     elems.oUl.animate({ "top": -elems.aLi.height * _index }, 200);
                        // } else {
                        //     _index = 0;
                        //     elems.oUl.animate({ "top": elems.aLi.height * (_index) }, 200);
                        // }
                        if (_index > 0) {
                            _index = (-elems.aLi.length / 2) + 1;
                            elems.oUl.animate({ "top": elems.aLi.height * (_index) }, 200);
                        }
                        elems.oUl.animate({ "top": elems.aLi.height * (_index) }, 200);
                        console.log(_index);
                    });
                }
                next();
            }
            init();
        }
    });
})(jQuery);