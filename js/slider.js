(function($) {
    $.fn.extend({
        slider: function(options) {
            var _this = this,
                timer = null,
                _index = 0,
                init = null,
                start = null,
                elems = {},
                defaults = {
                    event: "mouseover",
                    itemClass: "active1",
                    speed: 300,
                    delay: 2000
                }
            options = $.extend(defaults, options);

            init = function() {
                elems.aLi = _this.find('li');
                elems.aBtn = _this.next().find('li');
                elems.aBtn.on(options.event, function() {
                    clearInterval(timer);
                    _index = $(this).index();
                    $(this).addClass(options.itemClass).siblings().removeClass(options.itemClass);
                    elems.aLi.eq(_index).fadeTo(options.speed, 1).siblings().fadeOut(options.speed);

                });
            }
            start = function() {
                timer = setInterval(function() {
                    _index++;
                    if (_index >= elems.aLi.length) {
                        _index = 0;
                    }
                    elems.aLi.eq(_index).fadeTo(options.speed, 1).siblings().fadeOut(options.speed);
                    elems.aBtn.eq(_index).addClass(options.itemClass).siblings().removeClass(options.itemClass);
                }, options.delay);
            }

            _this.hover(function() {
                clearInterval(timer);
            }, function() {
                start();
            });
            init();
            start();

        }
    });
})(jQuery);