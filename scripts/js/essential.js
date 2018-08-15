/*--- Mobile Menu Display ---*/

//When menu button is clicked in mobile display - 
//Show or hide menu
let showMenu = false;
$('#mobile-menu button').on('click', e => {
    if(!showMenu) {
        $('#mobile-menu ul').attr('class', 'show-menu');
        showMenu = true;
    } else {
        $('#mobile-menu ul').attr('class', 'hide-menu');
        showMenu = false;
    }
});

//If one of the links are clicked, hide menu
$('#mobile-menu ul').children().on('click', e => {
    $('#mobile-menu ul').attr('class', 'hide-menu');
    showMenu = false;
});

//If display has changed to mobile, hide menu
$(window).resize(() => {
    if($(window).width() < 622) {
        $('#mobile-menu ul').attr('class', 'hide-menu');
        showMenu = false;
    }
});

/*--- Mobile Menu Animation ---*/
const desktopMenu = $('#desktop-menu ul').children();
const mobileMenu = $('#mobile-menu ul').children();

for(let i = 0; i < desktopMenu.length; i++) {
    let loc = desktopMenu[i].children[0].getAttribute('href');

    $(desktopMenu[i]).on('click', e => {
        $('html, body').animate({
            scrollTop: $(loc).offset().top
        }, 1000);
    });

    $(mobileMenu[i]).on('click', e => {
        $('html, body').animate({
            scrollTop: $(loc).offset().top
        }, 1000);
    });
}