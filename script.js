const imgfront = document.querySelector('.img-front');
const imgmid = document.querySelector('.img-mid');
const skyisland = document.querySelector('.sky-island');
const cloud = document.querySelector('.cloud');
const lenflare = document.querySelector('.lenflare');
const text = document.querySelector('.text-middle');
const text2 = document.querySelector('.text-middle2');
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
    // if (scrollvalue < window.scrollY) {
    //     btn.style.transform = `translate(-50%, ${window.scrollY}px)`;
    // }
    // else {
    //     btn.style.transform = `translate(-50%, ${window.scrollY}px)`;
    // }

    if(window.scrollY >= 250) {
        btn.style.transform = `translate(-50%, -50%) scale(${0})`;
    }
    else {
        btn.style.transform = `translate(-50%, -50%) scale(${1})`;
    }

    // text text2
    if (scrollvalue < window.scrollY) {
        text.style.transform = `translate(-50%, ${-50 + window.scrollY / 2.5}%)`;
        text2.style.transform = `translate(-50%, ${-50 + window.scrollY / 2}%)`;
    }
    else {
        text.style.transform = `translate(-50%, ${-50 + window.scrollY / 2.5}%)`;
        text2.style.transform = `translate(-50%, ${-50 + window.scrollY / 2}%)`;
    }

    // pop up text
    if (window.scrollY >= 250) {
        h1content.style.transform = 'scale(1)';
    }
    else {
        h1content.style.transform = 'scale(0)';
    }

    if (window.scrollY >= 350) {
        pcontent[0].style.transform = 'scale(1)';
    }
    else {
        pcontent[0].style.transform = 'scale(0)';
    }

    if (window.scrollY >= 450) {
        pcontent[1].style.transform = 'scale(1)';
    }
    else {
        pcontent[1].style.transform = 'scale(0)';
    }

    if (window.scrollY >= 570) {
        pcontent[2].style.transform = 'scale(1)';
    }
    else {
        pcontent[2].style.transform = 'scale(0)';
    }

    console.log(window.scrollY);
    scrollvalue = window.scrollY;
});
