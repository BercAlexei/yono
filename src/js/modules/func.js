'use strict';
import { getResource } from './../services/getResourse.js';
import { CreateSize } from './../services/createSize.js';

export default async function changeSize() {
    const setSize = document.querySelector('.promo__size'),
        priceSpan = document.querySelector('.promo__price span');

    let hero = await getResource('db.json').then(res => res.Hero);

    hero.forEach(({ size }) => {
        new CreateSize(size).render();
    });

    const sizeChecked = setSize.querySelectorAll('input')[0];
    let sizeLabel = `${sizeChecked.getAttribute('id')}`;

    sizeChecked.checked = true;

    function filterArrHero() {
        hero.filter(({ price, size }) => {
            if (size === sizeLabel) {
                priceSpan.innerHTML = `${price}`;
            }
        });
    }

    filterArrHero();

    setSize.addEventListener('click', (event) => {
        if (event.target.getAttribute('data-size') !== '' && event.target.tagName == 'LABEL') {
            sizeLabel = event.target.getAttribute('data-size');

            filterArrHero();
        }
    });
}