funciton ,slideAndFade,(event) {
    event.target.style.transform  = 'translate(400px)';
}
document.querySelector('.red').addEventListener('click', slideAndFade);
