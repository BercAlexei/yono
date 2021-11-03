'use strict'
import { getResource } from './../services/getResourse.js'
import { CreateSize } from '../services/createSize.js';

export default async function showImg() {
    const setSize = document.querySelector('.promo__size'),
        price = document.querySelector('.promo__price span');

    let res = await getResource('db.json');
    let size = '';

    res.Hero.forEach(({ price, size } = element) => {
        new CreateSize(size).render();
        console.log(price)
    });

    setSize.addEventListener('click', (event) => {
        if (event.target.getAttribute('data-size') !== '' && event.target.tagName == 'LABEL') {
            size = event.target.getAttribute('data-size');
        }
    })
}