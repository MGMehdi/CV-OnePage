$(document).ready(function () {
    /****************************************************** APPARAITRE LE CV ET LA PHOTO **************************************************************************/
    setTimeout(function () {
        // $('#CV').animate({ 'opacity': '1' }, 1500);
        $('#CV').css({ 'display': 'block' });
        $('#badge').animate({ 'opacity': '1' }, 1000);
        $('#photoprofil').animate({ 'width': '256px', 'height': '256px' }, 1000);
    }, 100);

    /******************************************************* APPARITION DES CADRES *************************************************************************/
    setTimeout(function () {
        $("#Presentation").animate({ 'opacity': '1' }, 500);
    }, 500)
    setTimeout(function () {
        $("#Diplomes").animate({ 'opacity': '1' }, 500);
    }, 1000)
    setTimeout(function () {
        $("#Formations").animate({ 'opacity': '1' }, 500);
    }, 1500)
    setTimeout(function () {
        $("#Stages").animate({ 'opacity': '1' }, 500);
    }, 2000)
    setTimeout(function () {
        $("#InfoComp").animate({ 'opacity': '1' }, 500);
    }, 2500)
    setTimeout(function () {
        $("#Contact").animate({ 'opacity': '1' }, 500);
    }, 3000)

    /******************************************************* ANIMATION SUR LA PHOTO (TOURNER ET ZOOM) *************************************************************************/
    setTimeout(function () {
        $('#photoprofil').hover(function () {
            $('#photoprofil').css({
                'transition': '500ms',
                'width': '300px',
                'height': '300px',
                'transform': 'rotate(360deg)'
            })
        }, function () {
            $('#photoprofil').css({
                'transition': '500ms',
                'width': '256px',
                'height': '256px',
                'transform': 'rotate(-360deg)',
            })
        });
        
    }, 2000);
    /******************************************************* FAIT APPARAITRE LE BOUTON PLUS TARD *************************************************************************/
    setTimeout(function () {
        $('footer').css('display', 'block')
    }, 200);

    /******************************************************* AUGMENTE L'OPACITÉ DES CADRE QUAND LA SOURIS EST DESSUS *************************************************************************/
    $('.cadre').each(function () {
        $(this).hover(function () {
            $(this).css('transition', '500ms');
            $(this).css('background-color', 'rgba(0, 0, 0, 0.8)');
        }, function () {
            $(this).css('transition', '500ms');
            $(this).css('background-color', 'rgba(0, 0, 0, 0.3)');
        });
    });

    /******************************************************* REMONTE EN HAUT DE PAGE AVEC UN GLISSEMENT *************************************************************************/
    $('#topArrow').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1000);
    });

    /******************************************************* CALCUL L'AGE *************************************************************************/
    var today = new Date();
    var dd = parseInt(today.getDate());
    var mm = parseInt(today.getMonth() + 1); //Le premier mois commence par 1 et pas par 0
    var yyyy = parseInt(today.getFullYear());
    var age = yyyy - 1995;

    if (mm < 2) {
        age -= 1;
    }
    if (mm == 2) {
        if (dd < 4) {
            age -= 1;
        }
    }
    document.getElementById('age').innerHTML = age;
});





