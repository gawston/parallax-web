const imgfront = document.querySelector('.img-front');
const imgmid = document.querySelector('.img-mid');
const skyisland = document.querySelector('.sky-island');
const cloud = document.querySelector('.cloud');
const lenflare = document.querySelector('.lenflare');
const text = document.querySelector('.text-middle');
const btn = document.querySelector('.button');
const h1content = document.querySelector('.h1-content');
const pcontent = document.querySelectorAll('.p-content');

let scrollvalue = 0;

window.addEventListener("scroll", () => {
    // sky island
    if (scrollvalue < window.scrollY) {
        skyisland.style.transform = `translateY(${window.scrollY / 1.2}px)`;
    }
    else {
        skyisland.style.transform = `translateY(${window.scrollY / 1.2}px)`;
    }

    // cloud
    if (scrollvalue < window.scrollY) {
        cloud.style.transform = `translateY(${-window.scrollY}px)`;
    }
    else {
        cloud.style.transform = `translateY(${-window.scrollY}px)`;
    }

    // lenflare
    if (scrollvalue < window.scrollY) {
        lenflare.style.transform = `translateY(${-window.scrollY / 2}px)`;
    }
    else {
        lenflare.style.transform = `translateY(${-window.scrollY / 2}px)`;
    }

    // button
    if (scrollvalue < window.scrollY) {
        btn.style.transform = `translate(-50%, ${window.scrollY}px)`;
    }
    else {
        btn.style.transform = `translate(-50%, ${window.scrollY}px)`;
    }

    // text
    if (scrollvalue < window.scrollY) {
        text.style.transform = `translate(${20 - window.scrollY / 3.5}%, -50%)`;
    }
    else {
        text.style.transform = `translate(${20 - window.scrollY / 3.5}%, -50%)`;
    }

    // pop up text
    if (window.scrollY >= 230) {
        h1content.style.transform = 'scale(1)';
    }
    else {
        h1content.style.transform = 'scale(0)';
    }

    for(let i = 0; i < pcontent.length; i++) {
        if (window.scrollY >= 330) {
            pcontent[i].style.transform = 'scale(1)';
        }
        else {
            pcontent[i].style.transform = 'scale(0)';
        }
    }

    console.log(window.scrollY);
    scrollvalue = window.scrollY;
});