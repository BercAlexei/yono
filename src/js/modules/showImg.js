'use strict';
import { getResource } from '../services/getResourse.js';
import { CreateSize } from '../services/createSize.js';
import { CreateImgs } from '../services/createImgs.js';
import { tns } from 'tiny-slider';

export default async function changeSize() {
    const setSize = document.querySelector('.promo__size'),
        priceSpan = document.querySelector('.promo__price span'),
        setimg = document.querySelector('.promo__gallery');
    let mainImg = document.querySelector('.promo__img');

    let db = await getResource('db.json');

    db.Hero.forEach(({ size }) => {
        new CreateSize(size).render();
    });

    db.imgSrc.forEach(item => {
        new CreateImgs(item).render();
    });

    const sizeChecked = setSize.querySelectorAll('input')[0];
    let sizeLabel = `${sizeChecked.getAttribute('id')}`;

    sizeChecked.checked = true;

    function filterArrHero() {
        db.Hero.filter(({ price, size }) => {
            if (size === sizeLabel) {
                priceSpan.innerHTML = `${price}`;
            }
        });
    }

    filterArrHero();

    const imgChecked = setimg.querySelectorAll('input')[0];
    imgChecked.checked = true;

    function selectimg(src) {
        mainImg.innerHTML = `
            <img src="img/clothes/${src}.png" alt="hero">
        `;
    }

    selectimg(imgChecked.getAttribute('id'));
    
    setimg.addEventListener('click', event => {
        if (event.target.getAttribute('data-src') !== '' && (event.target.tagName == 'IMG' || event.target.tagName == 'LABEL')) {
            selectimg(event.target.getAttribute('data-src'));
        }
    });

    setSize.addEventListener('click', (event) => {
        if (event.target.getAttribute('data-size') !== '' && event.target.tagName == 'LABEL') {
            sizeLabel = event.target.getAttribute('data-size');

            filterArrHero();
        }
    });

    tns({
        container: '.slider',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        nav: false,
        center: true
      });
}