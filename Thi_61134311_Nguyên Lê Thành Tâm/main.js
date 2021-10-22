$(document).ready(function () {

    // pos = $('#x').position();
    $(document).on('scroll', function () {
        if ($(this).scrollTop() > 0) {
            $('#navbarResponsive1').addClass('fixed-top');
            $('#navbarResponsive1').addClass('navbar-light');
            $('#navbarResponsive1').addClass('bg-light');
        } else {
            $('#navbarResponsive1').removeClass('fixed-top');
            $('#navbarResponsive1').removeClass('navbar-light');
            $('#navbarResponsive1').removeClass('bg-light');
        }
        
            
    
    });
    $('.float-left').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    })

    $('.float-right').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    })

    $('#submitt').on('click', function () {
        let Name = $('#username1').val();
        let Pass = $('#password1').val();
        if (Name == 'abc' && Pass == 'xyz') {
            $('.dn').text('Hi abc');
        }
    })
});
