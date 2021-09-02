var mainslider;
var sliding= false;

$(document).ready(function(){
    var options = {
        slides:'.slide', //Nama slide di slidecontainer
        swipe: false, //handler swipe, wajib include touchSwipe
        transition: "slide", //Transisi slide=> slide dan fade
        slideTracker: true, //menambah pelacakan slide
        slideTrackerID: 'slideposition', //Nama pelacakan slide
        slideOnInterval: false, //Interval slide
        interval: 9000, //Interval slide, jika slideOnInterval is enabled/true
        animateDuration: 1000, //Durasi animasi
        animationEasing: 'ease', //Nilai yang diterima: linear ease in out in-out snap easeOutCubic
                                //easeInOutCubic easeInCirc easeOutCirc easeInOutCirc easeInExpo easeOutExpo
                                //easeInOutExpo easeInQuad easeOutQuad easeInOutQuad easeInQuart easeOutQuart
                                //easeInOutQuart easeInqQuint easeOutQuint easeInOutQuint easeInSine easeOutSine
                                //easeInOutSine easeInBack easeOutBack easeInOutBack
        pauseOnHover: false, //Pasu jika user mengarahkan kursor ke slide container
        magneticSwipe: true, //efek menempel pada slide ketika swipping/dragging
        neverEnding: true //aktifkan untuk membuat efek yang tida pernah berhenti/neverending.
    };

    $(".slider").simpleSlider(options);
    mainslider = $(".slider").data("simpleslider");
    /*yes, that's all!*/

    $(".slider").on("beforeSliding", function(event){
        var prevSlide=event.prevSlide;
        var newSlide=event.newSlide;
        $(".slider .slide[data-index='" + prevSlide +"'] .slidecontent").fadeOut();
        $(".slider .slide[data-index='" + newSlide +"'] .slidecontent").hide();
        sliding=true;
    });

    $(".slider").on("afterSliding", function(event){
        var prevSlide=event.prevSlide;
        var newSlide=event.newSlide;
        $(".slider .slide[data-index='" + newSlide +"'] .slidecontent").fadeIn();
        sliding=false;
    });
    
    /**
     * Control the slider by scrolling
     */
    $(window).bind('mousewheel', function(event){
        if(!sliding){
            if(event.originalEvent.deltaY > 0){
                mainslider.nextSlide();
            }
            else {
                mainslider.prevSlide();
            }
        }
    });

    $(".tema .temaweb").select2();
    $(".slide#satu").backstretch("image1.png");
    $(".slide#dua").backstretch("image2.png");
    $(".slide#tiga").backstretch("image3.jpg");
    $(".slide#empat").backstretch("image4.png");
    $(".slide#lima").backstretch("image5.png");
    $(".slide#enam").backstretch("image6.png");    

    $("#satu").ripples({
        resolution: 200,
        perturbance: 0.04,
    });
    $("#dua").ripples({
        resolution: 200,
        perturbance: 0.04,
    });
    $("#tiga").ripples({
        resolution: 200,
        perturbance: 0.04,
    });
    $("#empat").ripples({
        resolution: 200,
        perturbance: 0.04,
    });
    $("#lima").ripples({
        resolution: 200,
        perturbance: 0.04,
    });
    $("#enam").ripples({
        resolution: 200,
        perturbance: 0.04,
    });

    var typed = new Typed(".coba", {
        // Waits 1000ms after typing "First"
        strings: ["Bismillah Berhasil(?)", "Horeee...!!!"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
    });

    $('.slide .backstretch img').on('dragstart', function(event) { event.preventDefault(); });

    $(".slidecontent").each(function(){
        $(this).css('margin-top', -$(this).height()/2);
    }); 
});