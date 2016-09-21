const showHideRegisterButton = function() {
    const windowsTop = window.pageYOffset;
    const introductionHeight = $('header').height() + $('#introduction').height();
    if(windowsTop > introductionHeight) { 
        $('#header__nav__menu--register').fadeIn();
    }
    else {
        $('#header__nav__menu--register').fadeOut();
    }
};

$(function(){

    showHideRegisterButton();
    $(document).scroll(showHideRegisterButton);

    $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 240
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        }
    );

    $('.scrollspy').scrollSpy();

    $('#content__section1__button__email').click(function() {
        $('#content__section1__button__facebook').hide();
        $('#content__section1__button__google').hide();
        $('#content__section1__button__email').hide();
        $('#content__section1__button__send').show();
        $('#content__section1__button__cancel').show();
        $('#content__section1__email--input').slideDown();
        $('#content__section1__email--input').focus();
    });

    $('#content__section1__button__cancel').click(function() {
        $('#content__section1__email--input').slideUp();
        $('#content__section1__button__facebook').show();
        $('#content__section1__button__google').show();
        $('#content__section1__button__email').show();
        $('#content__section1__button__send').hide();
        $('#content__section1__button__cancel').hide();
    });


});
