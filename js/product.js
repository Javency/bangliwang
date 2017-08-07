(function($) {
    $.fn.extend({
        productSlidebar: function(options) {
            var _this = this,
                timer = null,
                prev = null,
                next = null,
                init = null,
                elems = {},
                _index = 0,
                start = null,
                defaults = {
                    speed: 500,
                    delay: 2000,
                    event: "click",
                    event2: "mouseout"
                }
            options = $.extend(defaults, options);

            init = function() {
                elems.oUl = _this.find("ul");
                elems.aLi = elems.oUl.children("li");
                elems.prev = _this.prev("a");
                elems.next = _this.next("a");
                // console.log(elems.next);
                // console.log(elems.oUl);
                // console.log(elems.prev);
                start();
                prev();
                next();
            }

            start = function() {
                clearInterval(timer);
                timer = setInterval(function() {
                    _index++;
                    if (_index > elems.aLi.length / 4) {
                        _index = 0;
                    }
                    elems.oUl.animate({
                        "left": -elems.aLi.width() * 4 * _index
                    }, options.speed);
                }, options.delay);
            }

            prev = function() {
                // console.log(1);
                elems.prev.on(options.event, function() {
                    clearInterval(timer);
                    _index--;
                    if (_index < 0) {
                        _index = elems.aLi.length / 4;
                    }
                    elems.oUl.animate({
                        "left": -elems.aLi.width() * 4 * _index
                    }, options.speed);
                }).on(options.event2, function() {
                    start();
                });
            }

            next = function() {
                // console.log(1);
                elems.next.on(options.event, function() {
                    clearInterval(timer);
                    _index++;
                    if (_index > elems.aLi.length / 4) {
                        _index = 0;
                    }
                    elems.oUl.animate({
                        "left": -elems.aLi.width() * 4 * _index
                    }, options.speed);
                }).on(options.event2, function() {
                    start();
                });
            }

            init();
        }
    });
})(jQuery);