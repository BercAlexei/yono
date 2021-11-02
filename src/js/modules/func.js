'use strict'
import { getResource } from './../services/getResourse.js'

export default async function showImg() {

    let res = await getResource('db.json');

    const setSize = document.querySelector('.promo__size'),
          price = document.querySelector('.promo__price span');

    setSize.addEventListener('click', (event) => {

        switch(true) {
            case (event.target.getAttribute('data-size') === 'S') : 
                price.innerHTML = `${res.Hero.size_price.S.price}`
                break;
            case (event.target.getAttribute('data-size') === 'M') : 
                price.innerHTML = `${res.Hero.size_price.M.price}`
                break;
            case (event.target.getAttribute('data-size') === 'L') : 
                price.innerHTML = `${res.Hero.size_price.L.price}`
                break;
        }
    })



}