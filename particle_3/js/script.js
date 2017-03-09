'use strict';
/*
*
* 1. Variables
* 2. General
* 3. Menu
* 4. Slideshow
* 5. Countdown
* 6. Particles
* 7. Counter
* 8. Lightbox
*
*
* */


$(document).ready(function () {

    // Variables

    var $window = $(window),
        $body = $('body'),
        $loaderBg = $('.loader-bg'),
        $menu = $('.menu > button'),
        $menuIcon = $('.menu-icon'),
        $menuBtn = $('.menu-txt'),
        $loadingBar = $('#loading-bar'),
        $content = $('.content'),
        $countdown = $('.countdown'),
        $count_number = $('.count-number'),
        $timer = $('.timer'),
        $lightbox = $('.lightbox-gallery'),
        $contentSlideshow = $('.content-slideshow'),
        $box = $('.box'),
        $windowHeight = $window.height(),
        $windowWidth = $window.width(),
        $contentSlideshowHeight = $contentSlideshow.height(),
        $contentSlideshowWidth = $contentSlideshow.width();

    $window.on('resize', function () {
        $content.css('transition-delay','0s');
        $windowHeight = $window.height();
        $contentSlideshowHeight = $contentSlideshow.height();
        $contentSlideshow.css({
            'padding-top' : ($windowHeight - $contentSlideshowHeight) / 2
        });
    });

    setTimeout(function() {
        $loaderBg.addClass('fadeOut animated hide');
        $contentSlideshow.addClass('fadeIn animated');
    }, 2500);

    $box.on('mouseenter', function () {
        $box.removeClass('on');
        $(this).addClass('on')
    });

    // -----------------------------------------------------------------------------------------------------
    // MENU

    $menu.on('click', function () {
        $menuIcon.toggleClass('on');
        $menuBtn.toggleClass('on');
        $loadingBar.toggleClass('on');
        $content.toggleClass('on');
        $contentSlideshow.toggleClass('on');
        setTimeout(function() {
            // start all the timers
            $timer.each(count);
            $menuBtn.toggleClass('hide');
        }, 1000);
    });

    // -----------------------------------------------------------------------------------------------------
    // Slideshow

    $body.vegas({
        slides: [
            { src: "../img/b2.jpg" },
            { src: "../img/b1.jpg" },
            { src: "../img/b3.jpg" }
        ],
        animation: 'kenburns'
    });

    // -----------------------------------------------------------------------------------------------------
    // Content slideshow

    $contentSlideshow.css({
       'padding-top' : ($windowHeight - $contentSlideshowHeight) / 2
    });


    // -----------------------------------------------------------------------------------------------------
    // COUNTDOWN
    var ctd = document.getElementById('countdown');

    countdown();

    function countdown() {
        // ATTENTION - Ianuary is 0, February is 1 ......
        var launch_date = new Date(Date.UTC(2017, 3, 1, 0, 0));
        var days;
        var hours;
        var minutes;
        var seconds;
        var rest;
        var now = new Date();

        seconds = rest = Math.floor(((launch_date.getTime() - now.getTime()) / 1000));

        days = zero(Math.floor(seconds / 86400));
        seconds -= days * 86400;

        hours = zero(Math.floor(seconds / 3600));
        seconds -= hours * 3600;

        minutes = zero(Math.floor(seconds / 60));
        seconds -= minutes * 60;

        seconds = zero(Math.floor(seconds));

        function zero(n) {
            return (n < 10 ? '0' : false) + n;
        }

        rest <= 0 ? days = hours = minutes = seconds = '00' : setTimeout(countdown, 1000);

        ctd.innerHTML =
            '<li><div><span class="h3">' + days + '</span><br> day' + (days > 1 ? 's' : '') + '</div></li>' +
            '<li><div><span class="h3">' + hours + '</span><br> hour' + (hours > 1 ? 's' : '') + '</div></li>' +
            '<li><div><span class="h3">' + minutes + '</span><br> minute' + (minutes > 1 ? 's' : '') + '</div></li>' +
            '<li><div><span class="h3">' + seconds + '</span><br> second' + (seconds > 1 ? 's' : '') + '</div></li>';
    }


    // -----------------------------------------------------------------------------------------------------
    // PARTICLES

    particlesJS(
        {
            "particles": {
                "number": {
                    "value": 20,
                    "density": {
                        "enable": true,
                        "value_area": 1000
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "triangle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 10,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 173.61248115909999,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 5,
                    "direction": "top-right",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": false,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": false,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 1006.993006993007,
                        "line_linked": {
                            "opacity": 0
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        }
    );

    // -----------------------------------------------------------------------------------------------------
    // COUNTER

    $.fn.countTo = function (options) {
        options = options || {};

        return $(this).each(function () {
            // set options for current element
            var settings = $.extend({}, $.fn.countTo.defaults, {
                from: $(this).data('from'),
                to: $(this).data('to'),
                speed: $(this).data('speed'),
                refreshInterval: $(this).data('refresh-interval'),
                decimals: $(this).data('decimals')
            }, options);

            // how many times to update the value, and how much to increment the value on each update
            var loops = Math.ceil(settings.speed / settings.refreshInterval),
                increment = (settings.to - settings.from) / loops;

            // references & variables that will change with each update
            var self = this,
                $self = $(this),
                loopCount = 0,
                value = settings.from,
                data = $self.data('countTo') || {};

            $self.data('countTo', data);

            // if an existing interval can be found, clear it first
            if (data.interval) {
                clearInterval(data.interval);
            }
            data.interval = setInterval(updateTimer, settings.refreshInterval);

            // initialize the element with the starting value
            render(value);

            function updateTimer() {
                value += increment;
                loopCount++;

                render(value);

                if (typeof(settings.onUpdate) == 'function') {
                    settings.onUpdate.call(self, value);
                }

                if (loopCount >= loops) {
                    // remove the interval
                    $self.removeData('countTo');
                    clearInterval(data.interval);
                    value = settings.to;

                    if (typeof(settings.onComplete) == 'function') {
                        settings.onComplete.call(self, value);
                    }
                }
            }

            function render(value) {
                var formattedValue = settings.formatter.call(self, value, settings);
                $self.html(formattedValue);
            }
        });
    };
    $.fn.countTo.defaults = {
        from: 0, // the number the element should start at
        to: 0, // the number the element should end at
        speed: 1000, // how long it should take to count between the target numbers
        refreshInterval: 100, // how often the element should be updated
        decimals: 0, // the number of decimal places to show
        formatter: formatter, // handler for formatting the value before rendering
        onUpdate: null, // callback method for every time the element is updated
        onComplete: null // callback method for when the element finishes updating
    };
    function formatter(value, settings) {
        return value.toFixed(settings.decimals);
    }

    // custom formatting example
    $count_number.data('countToOptions', {
        formatter: function (value, options) {
            return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
        }
    });

    // // start all the timers
    $timer.each(count);

    function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
    }


    // -----------------------------------------------------------------------------------------------------
    // Lightbox gallery

    // Inline popups
    $lightbox.magnificPopup({
        delegate: 'a',
        removalDelay: 500, //delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });

    // Image popups
    $lightbox.magnificPopup({
        delegate: 'a',
        type: 'image',
        removalDelay: 500, //delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function() {
                // just a hack that adds mfp-anim class to markup
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        closeOnContentClick: true,
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });

    // Hinge effect popup
    $('a.hinge').magnificPopup({
        mainClass: 'mfp-with-fade',
        removalDelay: 1000, //delay removal by X to allow out-animation
        callbacks: {
            beforeClose: function() {
                this.content.addClass('hinge');
            },
            close: function() {
                this.content.removeClass('hinge');
            }
        },
        midClick: true
    });


});
