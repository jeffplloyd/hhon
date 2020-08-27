document.querySelector('header a').addEventListener('click', function(e) {
    e.preventDefault();
    var offest = document.querySelector(e.target.parentNode.attributes.href.value).offsetTop;
    window.scroll({ top: offest, behavior: 'smooth' });
    history.replaceState(undefined, undefined, e.target.parentNode.attributes.href.value);
    history.pushState(e.target.parentNode.attributes.href.value, null, null);
});

document.querySelector('footer a').addEventListener('click', function(e) {
    e.preventDefault();
    var offest = document.querySelector(e.target.parentNode.attributes.href.value).offsetTop;
    window.scroll({ top: offest, behavior: 'smooth' });
    history.replaceState(undefined, undefined, e.target.parentNode.attributes.href.value);
    history.pushState(e.target.parentNode.attributes.href.value, null, null);
});

document.querySelectorAll('nav a').forEach(function(a){ 
    a.addEventListener('click', function(e) { 
        e.preventDefault();
        var offest = document.querySelector(e.target.attributes.href.value).offsetTop;
        window.scroll({ top: offest, behavior: 'smooth' });
        history.replaceState(undefined, undefined, e.target.attributes.href.value);
        history.pushState(e.target.attributes.href.value, null, null);
    });
});