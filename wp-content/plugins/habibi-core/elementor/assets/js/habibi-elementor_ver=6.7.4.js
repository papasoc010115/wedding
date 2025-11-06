/*
Template Name: Habibi
Author: wpoceans
Version: 1.0
*/

(function($) {
    'use strict';

    /*----- ELEMENTOR LOAD FUNTION CALL ---*/

    $(window).on('elementor/frontend/init', function () {

        var swiper_slide = function () {

            var menu = [];
            jQuery('.wpo-hero-slider .swiper-slide').each(function (index) {
                menu.push(jQuery(this).find('.slide-inner').attr("data-text"));
            });

            var interleaveOffset = 0.5;
            var swiperOptions = {
                loop: true,
                speed: 1000,
                parallax: true,
                autoplay: {
                    delay: 6500,
                    disableOnInteraction: false,
                },
                watchSlidesProgress: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">' + (index + 1) + "</span>";
                    },
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                on: {
                    progress: function (swiper) {
                        swiper.slides.forEach(function (slide) {
                            var slideProgress = slide.progress;
                            var innerOffset = swiper.width * interleaveOffset;
                            var innerTranslate = slideProgress * innerOffset;
                            slide.querySelector(".slide-inner").style.transform =
                                "translate3d(" + innerTranslate + "px, 0, 0)";
                        });
                    },
                    touchStart: function (swiper) {
                        swiper.slides.forEach(function (slide) {
                            slide.style.transition = "";
                        });
                    },
                    setTransition: function (swiper, speed) {
                        swiper.slides.forEach(function (slide) {
                            slide.style.transition = speed + "ms";
                            var inner = slide.querySelector(".slide-inner");
                            if (inner) {
                                inner.style.transition = speed + "ms";
                            }
                        });
                    }
                }
            };

            var swiper = new Swiper(".wpo-hero-slider .swiper-container", swiperOptions);

        }; // end


        // sliderBgSetting

        var sliderBgSetting = function() {
            // DATA BACKGROUND IMAGE
            var sliderBgSetting = $(".slide-bg-image");
            sliderBgSetting.each(function(indx) {
                if ($(this).attr("data-background")) {
                    $(this).css("background-image", "url(" + $(this).data("background") + ")");
                }
            });



        }; // end



        var owl_hero_slider = function() {

           /*------------------------------------------
                hero-items
            -------------------------------------------*/
                if ($(".hero-items").length) {
                    $(".hero-items").owlCarousel({
                        autoplay: true,
                        smartSpeed: 400,
                        margin: 30,
                        loop: true,
                        autoplayHoverPause: true,
                        dots: false,
                        arrows: false,
                        nav: true,
                        center:true,
                        navText: ['<i class="fi flaticon-left-arrow"></i>', '<i class="fi flaticon-right-arrow-1"></i>'],
                        responsive: {
                            0: {
                                items: 1,
                                margin: 10,
                            },

                            450: {
                                items: 1,
                                margin: 10,
                            },
                            
                            575: {
                                items: 2,
                                center:false,
                                margin: 20,
                            },
                            
                            767: {
                                items: 2,
                                center:false
                            },

                            992: {
                                items: 3
                            },

                            1200: {
                                items: 3
                            }
                        }
                    });
                }



        }; // end


        var static_hero_slider = function() {

            /*------------------------------------------
            Hero Slider SLIDER
            -------------------------------------------*/
            if ($(".static-hero-slide-img").length) {
                $(".static-hero-slide-img").owlCarousel({
                    autoplay: true,
                    smartSpeed: 300,
                    margin: 10,
                    loop: true,
                    autoplayHoverPause: true,
                    dots: false,
                    arrows: false,
                    nav: true,
                    navText: ['<i class="fi flaticon-left-arrow"></i>', '<i class="fi flaticon-right-arrow-1"></i>'],
                    responsive: {
                        0: {
                            items: 1,
                            dots: true,
                            arrows: false,
                            nav: false,
                        },

                        575: {
                            items: 1,
                        },
                        767: {
                            items: 1,
                        },

                        992: {
                            items: 2
                        },

                        1200: {
                            items: 3
                        }
                    }
                });
            }


        }; // end


        var slick_slider = function() {

             /*------------------------------------------
                = Testimonial slider 1
            -------------------------------------------*/
            if ($(".static-hero-s6").length) {
                $('.slider-for').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    asNavFor: '.slider-nav',
                    dots: false,
                });
                $('.slider-nav').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    asNavFor: '.slider-for',
                    focusOnSelect: true,
                    arrows: false,
                    fade: true,
                    dots: false,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    speed: 2000,
                });
            }


        }; // end



        var odometer = function() {

            if ($(".odometer").length) {
                $('.odometer').appear();
                $(document.body).on('appear', '.odometer', function(e) {
                    var odo = $(".odometer");
                    odo.each(function() {
                        var countNumber = $(this).attr("data-count");
                        $(this).html(countNumber);
                    });
                });
            }


        }; // end


        var partners_slider = function() {

            /*------------------------------------------
            = PARTNERS SLIDER
            -------------------------------------------*/
            if ($(".partners-slider").length) {
                $(".partners-slider").owlCarousel({
                    autoplay: true,
                    smartSpeed: 300,
                    margin: 0,
                    loop: true,
                    autoplayHoverPause: true,
                    dots: false,
                    arrows: false,
                    nav: false,
                    responsive: {
                        0: {
                            items: 2
                        },

                        550: {
                            items: 3
                        },

                        992: {
                            items: 4
                        },

                        1200: {
                            items: 5
                        }
                    }
                });
            }

        }; // end



        var service_slider = function() {

            /*------------------------------------------
        service-slider SLIDER
        -------------------------------------------*/
            if ($(".service-slider").length) {
                $(".service-slider").owlCarousel({
                    autoplay: true,
                    smartSpeed: 300,
                    margin: 30,
                    loop: true,
                    autoplayHoverPause: true,
                    dots: true,
                    arrows: false,
                    nav: true,
                    center: true,
                    items: 4,
                    stagePadding: 60,
                    navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
                    responsive: {
                        0: {
                            items: 1,
                            dots: true,
                            arrows: false,
                            nav: false,
                            stagePadding: 5,
                        },

                        575: {
                            items: 1,
                            stagePadding: 5,
                        },
                        767: {
                            items: 2,
                            dots: false,
                        },

                        992: {
                            items: 2,
                            dots: false,
                        },

                        1200: {
                            items: 4
                        }
                    }
                });
            }



        }; // end


        var testimonials_slider = function() {

            /*------------------------------------------
                = Testimonial slider 1
            -------------------------------------------*/
            if ($(".wpo-testimonial-wrap").length) {
                $('.slider-for').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    fade: true,
                    asNavFor: '.slider-nav',
                    dots: false,
                    responsive: [
                        {
                            breakpoint: 991,
                            settings: {
                                dots: false
                            }
                        }
                    ]
                });
                $('.slider-nav').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    asNavFor: '.slider-for',
                    focusOnSelect: true,
                    arrows: false,
                    dots: true,
                    responsive: [
                        {
                            breakpoint: 991,
                            settings: {
                                dots: true
                            }
                        }
                    ]
                });
            }

        }; // end

        var testimonials2_slider = function() {
            
            /*------------------------------------------
                = Testimonial slider 2
            -------------------------------------------*/
            if ($(".wpo-testimonial-wrap").length) {
                $('.wpo-testimonial-active').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    focusOnSelect: true,
                    arrows: false,
                    dots: true,
                });
            }    

        }; // end

        var testimonials3_slider = function() {
            
            /*------------------------------------------
                = Testimonial slider 3
            -------------------------------------------*/
            if ($(".wpo-testimonial-wrap-s2").length) {
                $('.wpo-testimonial-active-s2').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    focusOnSelect: true,
                    arrows: false,
                    dots: true,
                });
            }

        }; // end

        var product_slider = function() {

            /*------------------------------------------
             product-active
             -------------------------------------------*/
            if ($(".product-active").length) {
                $(".product-active").owlCarousel({
                    autoplay: true,
                    smartSpeed: 300,
                    margin: 30,
                    loop: true,
                    autoplayHoverPause: true,
                    dots: false,
                    arrows: false,
                    nav: true,
                    navText: ['<i class="fi flaticon-left-arrow"></i>', '<i class="fi flaticon-right-arrow-1"></i>'],
                    responsive: {
                        0: {
                            items: 1,
                            dots: true,
                            arrows: false,
                            nav: false,
                        },

                        575: {
                            items: 1,
                        },
                        767: {
                            items: 2,
                        },

                        992: {
                            items: 3
                        },

                        1200: {
                            items: 5
                        }
                    }
                });
            }

        }; // end


       
        var habibi_gallery = function() {

                    
          /*------------------------------------------
            Portfolio SLIDER
            -------------------------------------------*/
            if ($(".portfolio-slide").length) {
                $(".portfolio-slide").owlCarousel({
                    autoplay: true,
                    smartSpeed: 300,
                    margin: 0,
                    loop: false,
                    autoplayHoverPause: true,
                    dots: false,
                    nav: true,
                    navText: ['<i class="fi flaticon-left-arrow"></i>', '<i class="fi flaticon-right-arrow-1"></i>'],
                    items: 5,
                    responsive: {
                        0: {
                            items: 1,
                            dots: true,
                        },

                        767: {
                            items: 2,
                        },
                        1200: {
                            items: 3
                        },
                        1300: {
                            items: 4
                        },

                        1400: {
                            items: 4,
                        },
                        1500: {
                            items: 5
                        },

                    }
                });
            }



        }; // end


        var habibi_gallery_3 = function() {
            
         /*------------------------------------------
                = Testimonial slider 4
            -------------------------------------------*/
            if ($(".wpo-portfolio-section-s4").length) {
                $('.gallery-slide').not('.slick-initialized').slick({
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    focusOnSelect: true,
                    arrows: false,
                    dots: false,
                    variableWidth: true,
                    loop: false,
                    autoplay: false,
                });
            }

        }; // end


        var habibi_gallery_4 = function() {
            
         
        /*------------------------------------------
            = Testimonial slider 2
        -------------------------------------------*/
          if ($(".wpo-portfolio-section-s4").length) {
            $('.gallery-slide2').not('.slick-initialized').slick({
                slidesToShow: 6,
                slidesToScroll: 1,
                focusOnSelect: true,
                arrows: false,
                dots: false,
                variableWidth: true,
                loop: false,
                autoplay: false,
            });
        }
            
        }; // end


        var product_cat = function() {
            /*------------------------------------------
                = Testimonial SLIDER
            -------------------------------------------*/
            if ($(".wpo-service-slider").length) {
                $(".wpo-service-slider").owlCarousel({
                    autoplay: false,
                    smartSpeed: 300,
                    margin: 20,
                    loop: true,
                    autoplayHoverPause: true,
                    dots: false,
                    nav: true,
                    navText: ['<i class="fi flaticon-left-arrow"></i>', '<i class="fi flaticon-right-arrow-1"></i>'],

                    responsive: {
                        0: {
                            items: 1,
                            dots: true,
                            nav: false
                        },

                        500: {
                            items: 1,
                            dots: true,
                            nav: false
                        },

                        768: {
                            items: 2,
                            dots: false,
                        },

                        1200: {
                            items: 3
                        },

                        1400: {
                            items: 3
                        },

                    }
                });
            }



            
        }; // end



        var project_gallery = function() {

            /*------------------------------------------
                = FUNCTION FORM SORTING GALLERY
            -------------------------------------------*/
            function sortingGallery() {
                if ($(".sortable-gallery .gallery-filters").length) {
                    var $container = $('.gallery-container');
                    $container.isotope({
                        filter: '*',
                        animationOptions: {
                            duration: 750,
                            easing: 'linear',
                            queue: false,
                        }
                    });

                    $(".gallery-filters li a").on("click", function() {
                        $('.gallery-filters li .current').removeClass('current');
                        $(this).addClass('current');
                        var selector = $(this).attr('data-filter');
                        $container.isotope({
                            filter: selector,
                            animationOptions: {
                                duration: 750,
                                easing: 'linear',
                                queue: false,
                            }
                        });
                        return false;
                    });
                }
            }

            sortingGallery();


            /*------------------------------------------
                = MASONRY GALLERY SETTING
            -------------------------------------------*/
            function masonryGridSetting() {
                if ($('.masonry-gallery').length) {
                    var $grid = $('.masonry-gallery').masonry({
                        itemSelector: '.grid-item',
                        columnWidth: '.grid-item',
                        percentPosition: true
                    });

                    $grid.imagesLoaded().progress(function() {
                        $grid.masonry('layout');
                    });
                }
            }

        }; // end




        // slick_slider
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-habibi_slider.default', function($scope, $) {
            slick_slider();
        });

        //owl_hero_slider
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-habibi_slider.default', function($scope, $) {
            owl_hero_slider();
        });

        //Slider
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-habibi_slider.default', function($scope, $) {
            swiper_slide();
        });

        //sliderBgSetting
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-habibi_slider.default', function($scope, $) {
            sliderBgSetting();
        });

        //wpo-habibi_coundown_hero
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-habibi_coundown_hero.default', function($scope, $) {
            swiper_slide();
        });

        //sliderBgSetting
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-habibi_coundown_hero.default', function($scope, $) {
            sliderBgSetting();
        });

        //static_hero_slider
        elementorFrontend.hooks.addAction('frontend/element_ready/tmx-Habibi_planner_slider.default', function($scope, $) {
            static_hero_slider();
        });

        //odometer
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-habibi_funfact.default', function($scope, $) {
            odometer();
        });

        //partners_slider
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-habibi_client.default', function($scope, $) {
            partners_slider();
        });

        //service_slider
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-habibi_service.default', function($scope, $) {
            service_slider();
        });

        //testimonials_slider
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-habibi_testimonial.default', function($scope, $) {
            testimonials_slider();
        });

        //testimonials2_slider
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-habibi_testimonial.default', function($scope, $) {
            testimonials2_slider();
        });
        
        //testimonials3_slider
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-habibi_testimonial.default', function($scope, $) {
            testimonials3_slider();
        });

        //project_gallery
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-habibi_project.default', function($scope, $) {
            project_gallery();
        });

        //wpo-habibi_gallery
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-habibi_gallery.default', function($scope, $) {
            habibi_gallery();
        });
    
        //wpo-habibi_gallery_3
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-habibi_gallery.default', function($scope, $) {
            habibi_gallery_3();
        });
        //wpo-habibi_gallery_4
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-habibi_gallery.default', function($scope, $) {
            habibi_gallery_4();
        });
    
        //product_cat
        elementorFrontend.hooks.addAction('frontend/element_ready/wpo-product-cat.default', function($scope, $) {
            product_cat();
        });

    });

	
	jQuery(window).on('elementor/frontend/init', function () {
		elementorFrontend.hooks.addAction("frontend/element_ready/wpo-habibi_couple_hero.default", function (scope, $) {
			$(window).on('load', function () {
				if ($(".pointparallax").length) {
					$('.pointparallax').pointparallax();
				}
			});

			// For Elementor live editor to reinitialize when changes occur
			if (window.elementorFrontend.isEditMode()) {
				if ($(".pointparallax").length) {
					$('.pointparallax').pointparallax();
				}
			}
		});
	});

    $(window).on("elementor/frontend/init", function() {

        elementorFrontend.hooks.addAction("frontend/element_ready/wponewproducts.default", function(scope, $) {

            /*------------------------------------------
             product-active
             -------------------------------------------*/
            if ($(".product-active").length) {
                $(".product-active").owlCarousel({
                    autoplay: true,
                    smartSpeed: 300,
                    margin: 30,
                    loop: true,
                    autoplayHoverPause: true,
                    dots: false,
                    arrows: false,
                    nav: true,
                    navText: ['<i class="fi flaticon-left-arrow"></i>', '<i class="fi flaticon-right-arrow-1"></i>'],
                    responsive: {
                        0: {
                            items: 1,
                            dots: true,
                            arrows: false,
                            nav: false,
                        },

                        575: {
                            items: 1,
                        },
                        767: {
                            items: 2,
                        },

                        992: {
                            items: 3
                       },

                        1200: {
                            items: 5
                        }
                    }
                });
            }

        });

        elementorFrontend.hooks.addAction("frontend/element_ready/wpo-habibi_project.default", function(scope, $) {
            /*------------------------------------------
            = FUNCTION FORM SORTING GALLERY
                -------------------------------------------*/
            function sortingGallery() {
                if ($(".sortable-gallery .gallery-filters").length) {
                    var $container = $('.gallery-container');
                    $container.isotope({
                        filter: '*',
                        animationOptions: {
                            duration: 750,
                            easing: 'linear',
                            queue: false,
                        }
                    });

                    $(".gallery-filters li a").on("click", function() {
                        $('.gallery-filters li .current').removeClass('current');
                        $(this).addClass('current');
                        var selector = $(this).attr('data-filter');
                        $container.isotope({
                            filter: selector,
                            animationOptions: {
                                duration: 750,
                                easing: 'linear',
                                queue: false,
                            }
                        });
                        return false;
                    });
                }
            }

            sortingGallery();

        });

        elementorFrontend.hooks.addAction("frontend/element_ready/wpo-habibi_gallery.default", function(scope, $) {
            /*------------------------------------------
            = FUNCTION FORM SORTING GALLERY
            -------------------------------------------*/
            function sortingGallery() {
                if ($(".sortable-gallery .gallery-filters").length) {
                    var $container = $('.gallery-container');
                    $container.isotope({
                        filter: '*',
                        animationOptions: {
                            duration: 750,
                            easing: 'linear',
                            queue: false,
                        }
                    });

                    $(".gallery-filters li a").on("click", function() {
                        $('.gallery-filters li .current').removeClass('current');
                        $(this).addClass('current');
                        var selector = $(this).attr('data-filter');
                        $container.isotope({
                            filter: selector,
                            animationOptions: {
                                duration: 750,
                                easing: 'linear',
                                queue: false,
                            }
                        });
                        return false;
                    });
                }
            }

            sortingGallery();


            /*------------------------------------------
                = MASONRY GALLERY SETTING
            -------------------------------------------*/
            function masonryGridSetting() {
                if ($('.masonry-gallery').length) {
                    var $grid = $('.masonry-gallery').masonry({
                        itemSelector: '.grid-item',
                        columnWidth: '.grid-item',
                        percentPosition: true
                    });

                    $grid.imagesLoaded().progress(function() {
                        $grid.masonry('layout');
                    });
                }
            }

        });




    })

})(jQuery);