$(document).ready(function(){
    // var userImage = '/images/trust.jpg';
    console.log('run')
    $('.trust').click(function(){
        console.log('click');
        $('#trust-position').append(
            $('<img class="photo">').attr('src','images/trust.jpg'));    
    })

    $('.sufficient').click(function(){
        console.log('click');
        $('#sufficient-position').append(
            $('<img>').attr('src','images/sufficient.jpg')
        ) 
    })

    $('.miser').click(function(){
        console.log('click');
        $('#miser-position').append(
            $('<img>').attr('src','images/miser.jpg')
        ) 
        })

    $('.fair').click(function(){
        console.log('click');
        $('#fair-position').append(
            $('<img>').attr('src','images/fair.jpg')
        ) 
        })

    $('.impractical').click(function(){
        console.log('click');
        $('#impractical-position').append(
            $('<img>').attr('src','images/impractical.jpg')
        ) 
        })

    $('.procrastinate').click(function(){
        console.log('click');
        $('#procrastinate-position').append(
            $('<img>').attr('src','images/procrastinate.jpg')
        ) 
        })

    $('.prepared').click(function(){
        console.log('click');
        $('#prepared-position').append(
            $('<img>').attr('src','images/prepared.jpg')
        ) 
        })



/*---------OPEN POP-UP------------------*/
    $('#trust-position').click(function(event) {
        console.log('click');   
        $("body").toggleClass("show-popup1");
        event.preventDefault();
    });

    $('#sufficient-position').click(function(event) {
        console.log('click');   
        $("body").toggleClass("show-popup2");
        event.preventDefault();
    });

    $('#miser-position').click(function(event) {
        console.log('click');   
        $("body").toggleClass("show-popup3");
        event.preventDefault();
    });

    $('#fair-position').click(function(event) {
        console.log('click');   
        $("body").toggleClass("show-popup4");
        event.preventDefault();
    });

    $('#impractical-position').click(function(event) {
        console.log('click');   
        $("body").toggleClass("show-popup5");
        event.preventDefault();
    });

    $('#procrastinate-position').click(function(event) {
        console.log('click');   
        $("body").toggleClass("show-popup6");
        event.preventDefault();
    });

    $('#prepared-position').click(function(event) {
        console.log('click');   
        $("body").toggleClass("show-popup7");
        event.preventDefault();
    });


/*---------Close POP-UP------------------*/
    $(".close-button .icon1").click(function(event) {
        $("body").toggleClass("show-popup1");
        event.preventDefault();
    });

    $(".close-button .icon2").click(function(event) {
        $("body").toggleClass("show-popup2");
        event.preventDefault();
    });

    $(".close-button .icon3").click(function(event) {
        $("body").toggleClass("show-popup3");
        event.preventDefault();
    });

    $(".close-button .icon4").click(function(event) {
        $("body").toggleClass("show-popup4");
        event.preventDefault();
    });

    $(".close-button .icon5").click(function(event) {
        $("body").toggleClass("show-popup5");
        event.preventDefault();
    });

    $(".close-button .icon6").click(function(event) {
        $("body").toggleClass("show-popup6");
        event.preventDefault();
    });

    $(".close-button .icon7").click(function(event) {
        $("body").toggleClass("show-popup7");
        event.preventDefault();
    });

    /* $(".close-button .icon8").click(function(event) {
        $("body").toggleClass("show-popup8");
        event.preventDefault();
    }); */


})
