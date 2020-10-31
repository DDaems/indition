const ga_code = 'G-N91727FTKN'; //Indition: 'UA-43965515-3';

window.onload = function() {
    let jaargang = new Date().getFullYear();
    (jaargang > 2020)
    document.getElementById("jaargang").innerHTML = "- " + jaargang;

    if (getCookie('allowTracking') == null) {
        cookieConsent();
    } else if (getCookie('allowTracking') == 'false') {

        gtag('js', new Date());
        gtag('config', ga_code);

        optOutAnalytics();
    } else {

        gtag('js', new Date());
        gtag('config', ga_code);
    }

}

function stuurEmail() {
    alert("bericht verzonden");
}

function optOutAnalytics() {
    window['ga-disable-' + ga_code] = true;
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function cookieConsent() {

    $('.toast').toast('show')
}

$('#btnDeny').click(() => {
    optOutAnalytics();

    setCookie('allowTracking', 'false', 7)
    $('.toast').toast('hide')
})

$('#btnAccept').click(() => {
    setCookie('allowTracking', 'true', 7)

    gtag('js', new Date());
    gtag('config', ga_code);

    $('.toast').toast('hide')
})