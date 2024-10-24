window.addEventListener('wheel', (e) => {
    console.log(e.deltaY < 0);
    if (e.deltaY < 0) {
        document.querySelector('.header').classList.add('header--visible')
    } else {
        document.querySelector('.header').classList.remove('header--visible')
    }
})